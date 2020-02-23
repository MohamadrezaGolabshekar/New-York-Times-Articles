import React, { useEffect, useState, useContext } from 'react';
import { Dimmer, Loader, Pagination } from 'semantic-ui-react'

import { AppContext } from "../Store/Store";
import { getData } from '../utils/getData';
import ArticleList from '../components/ArticleList/ArticleList';
import { ContainerWrapper, HorizontalFlex } from '../components/StyledComponents';
import SearchInput from '../components/SearchInput/SearchInput';
import SortDate from '../components/SortDate/SortDate';
import ErrorMessage from '../components/UI/ErrorMessage';
import EmptyList from '../components/UI/EmptyList';

/**
 * main component and this acts like a container 
 */
const ArticleContainer = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [query, setQuery] = useState({});
    const [error, setError] = useState(null);
    const connectStore = useContext(AppContext);
    const limit = 10;
    const getArticleApi = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

    /**
     * @desc fetch Articles data based and pagination data and input search
     * @param object queryObj - the query object for get Articles like {offset : 10} 
     */
    const fetchData = async (queryObj = {}) => {
        setIsLoading(true);
        try {
            const data = await getData(getArticleApi, { begin_date: 20200223, ...queryObj });
            connectStore.dispatch({
                type: 'FETCH_ARTICLES',
                payload: { articles: data.docs }
            });
            setTotal(data.meta.hits);
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            setError({ message: err.message, code: err.code });
        }
    }

    // like componentDidMount
    useEffect(() => {
        fetchData();
    }, []);


    /**
     * @desc handle change page in pagination and uses fetchData function
     * @param {*} e 
     * @param {*} data 
     */
    const onPageChange = (e, data) => {
        setActivePage(data.activePage);
        const queryObj = { ...query, page: data.activePage - 1 };
        fetchData(queryObj);
    }

    /**
     * @desc handle input search change for onChange searching
     * @param string val 
     */
    const onSearch = val => {
        setActivePage(1);
        const fetchQuery = {...query, q: val};
        setQuery(fetchQuery)
        fetchData(fetchQuery);
    }

    /**
     * @desc handle sort for newest or oldest article
     * @param string val 
     */
    const onSort = val => {
        setActivePage(1);
        const fetchQuery = {...query, sort: val};
        setQuery(fetchQuery)
        fetchData(fetchQuery);
    }

    return (
        <>
            {
                error ?
                    <ErrorMessage message={error.message} code={error.code} /> :
                    <>
                        <Dimmer active={isLoading} inverted>
                            <Loader inverted size='large'>Getting Articles</Loader>
                        </Dimmer>
                        <ContainerWrapper>
                            <HorizontalFlex style={{minWidth: '40%'}}>
                                <SearchInput onSearch={onSearch} />
                                <SortDate onSort={onSort} />
                            </HorizontalFlex>
                            {
                                connectStore.state.originalArticles && connectStore.state.originalArticles.length ?
                                    <>
                                        <ArticleList Articles={connectStore.state.originalArticles} />
                                        <hr />
                                        <Pagination
                                            activePage={activePage}
                                            firstItem={null}
                                            lastItem={null}
                                            siblingRange={0}
                                            totalPages={Math.ceil(total / limit)}
                                            onPageChange={onPageChange} />
                                    </> :
                                    connectStore.state.originalArticles && connectStore.state.originalArticles.length === 0 ?
                                        <EmptyList title='Empty list' message='There is no Article with this search :(' /> :
                                        null
                            }


                        </ContainerWrapper>
                    </>
            }
        </>
    )
}

export default ArticleContainer;