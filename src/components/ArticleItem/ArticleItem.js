import React, { useContext } from 'react';
import { Card } from 'semantic-ui-react'
import { ArticleTitle, H4, ArticlePubTime } from '../StyledComponents';
import Like from '../Like/Like';
import { createShortText } from '../../utils/createShortText';
import { AppContext } from "../../Store/Store";
import { withRouter } from 'react-router-dom'

/**
 * it is just a placeholder for a Article item data and for it I used 
 * Card component from semantic-ui-react and some other custom component
 */
const ArticleItem = ({ article, history }) => {

    const connectStore = useContext(AppContext);

    const goToDetail = _id => {
        connectStore.dispatch({
            type: 'SELECT_ARTICLE',
            payload: { _id }
        });

        history.push('/article-detail')
    }

    return (
        <Card onClick={() => null}>
            <Card.Content style={{ textAlign: 'center' }}>
                <ArticleTitle onClick={() => goToDetail(article._id)}>{createShortText(article.section_name || '-', 15)}</ArticleTitle>
                <H4 onClick={() => goToDetail(article._id)}>{createShortText(article.headline.name || article.headline.main, 30)}</H4>
                <ArticlePubTime>{new Date(article.pub_date).toDateString()}</ArticlePubTime>
                <Like article={article} />
            </Card.Content>
        </Card>
    )
}

export default withRouter(ArticleItem);