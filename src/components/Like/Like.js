import React, { useContext } from 'react';
import { Icon } from 'semantic-ui-react'
import { AppContext } from "../../Store/Store";

/**
 * this is like component 
 * it handle a click function to dispatch an action to our reducer and handle 
 * like and dislike Article
 */
const Like = ({ article }) => {

    const connectStore = useContext(AppContext);

    return (
        <>
            <Icon
                name={`heart${!article.isLiked ? ' outline' : ''}`}
                size='big'
                color={!article.isLiked ? 'black' : 'red'}
                onClick={() => {
                    connectStore.dispatch({
                        type: article.isLiked ? 'DISLIKE' : 'LIKE',
                        payload : { _id: article._id }
                    });
                }} />
        </>
    )
}

export default Like;