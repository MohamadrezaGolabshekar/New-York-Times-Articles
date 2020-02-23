import React, { useContext } from 'react';
import { AppContext } from "../Store/Store";
import ArticleList from '../components/ArticleList/ArticleList';
import { ContainerWrapper } from '../components/StyledComponents';
import EmptyList from '../components/UI/EmptyList';
import { Icon } from 'semantic-ui-react'

/**
 * a container for liked Articles and for data it uses 
 * likedArticles array from our store (context API)
 */
const SavedArticleContainer = () => {

    const connectStore = useContext(AppContext);

    return (
        <>
            {
                connectStore.state.likedArticles && connectStore.state.likedArticles.length
                ?
                <ContainerWrapper>
                    <ArticleList Articles={connectStore.state.likedArticles} />
                </ContainerWrapper>
                :
                <EmptyList title='Empty list' message={<><Icon name='heart' size='small' color='red'/>Articles and come back here ;)</>}/>
            }
        </>
    )
}

export default SavedArticleContainer;