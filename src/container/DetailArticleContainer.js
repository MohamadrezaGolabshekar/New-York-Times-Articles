import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from "../Store/Store";
import Like from '../components/Like/Like';
import { Label } from 'semantic-ui-react';
import { ContainerWrapper, HorizontalFlex, ArticleTitle, H4, P, ArticlePubTime, ArticleItemImg } from '../components/StyledComponents';
/**
 * a container for detail article
 */
const DetailArticleContainer = ({ history }) => {

    const connectStore = useContext(AppContext);
    const [article, setArticle] = useState({});
    const imagePath = 'https://static01.nyt.com/';

    useEffect(() => {
        if (!connectStore.state.selectedArticleId) {
            history.goBack()
        } else {
            setArticle(connectStore.state.originalArticles.find(i => i._id === connectStore.state.selectedArticleId))
        }
    })


    return (
        <>
            {
                article._id &&
                <ContainerWrapper>

                    <ArticleTitle>{article.section_name || '-'}</ArticleTitle>
                    {article.subsection_name && <H4>{article.subsection_name}</H4>}

                    <P>{article.abstract}</P>

                    {
                        article.multimedia && article.multimedia.length ?
                            <ArticleItemImg src={`${imagePath}${article.multimedia[0].url}`} /> : null
                    }

                    <P>
                        <a href={article.web_url} target='_blank'>Read more</a>
                    </P>

                    <P>This article is created {article.byline.organization && 'by'}: {article.byline.organization || article.byline.original}</P>

                    <Like article={article} />

                    <ArticlePubTime>{new Date(article.pub_date).toDateString()}</ArticlePubTime>
                    {
                        article.keywords && article.keywords.length ?
                            <HorizontalFlex>
                                {article.keywords.map((key, inx) =>

                                    <Label style={{ margin: '5px' }} basic color='blue' key={`${key.value}-${inx}`}>{key.value}</Label>
                                )}
                            </HorizontalFlex>
                            : null
                    }

                </ContainerWrapper>
            }
        </>
    )
}

export default withRouter(DetailArticleContainer);