import React from 'react';

import { ArticleListWrapper } from '../StyledComponents'
import ArticleItem from '../ArticleItem/ArticleItem';

/**
 * this component acts like a container for ArticleItem 
 */
const ArticleList = ({ Articles }) => {

    const goToDetail = article => {
        console.log('to detail ', article);
    }


    return (
        <>

            <ArticleListWrapper>
                {
                    Articles.map(article => <ArticleItem key={article._id} article={article} goToDetail={goToDetail} />)
                }
            </ArticleListWrapper>
        </>
    )
}

export default ArticleList;