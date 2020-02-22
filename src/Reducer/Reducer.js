import {likeAndDislike, checkLiked} from '../utils/reducerUtils';

const initialState = {
    originalArticles: null,
    likedArticles: []
};

const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "FETCH_ArticleS":
            return { ...state, originalArticles: checkLiked(action.payload.Articles, state.likedArticles) };
        case "LIKE":
            const { cloneOriginalArticles: cloneOrg, cloneLikedArticles: cloneLiked } = likeAndDislike(true, action.payload._id, state.originalArticles, state.likedArticles);
            return { ...state, likedArticles: cloneLiked, originalArticles: cloneOrg };
        case "DISLIKE":
            const { cloneOriginalArticles: cloneOrgDislike, cloneLikedArticles: cloneLikedDislike } = likeAndDislike(false, action.payload._id, state.originalArticles, state.likedArticles);
            return { ...state, likedArticles: cloneLikedDislike, originalArticles: cloneOrgDislike };
        default:
            return state;
    }
}

export { appReducer, initialState }


