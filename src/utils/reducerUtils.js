
/**
 * @desc this function get original data and liked array and create clone from them 
 * and for LIKE action, push to cloned liked array and add isLiked property to cloned data
 * and for DISLIKE, splice from cloned liked array and change isLiked property in original data
 * @param {*} boolean isLike 
 * @param {*} string id 
 * @param {*} array originalArticles 
 * @param {*} array likedArticles 
 */
export const likeAndDislike = (isLike, id, originalArticles, likedArticles) => {
    const cloneOriginalArticles = [...originalArticles];
    const likedArticleIndex = cloneOriginalArticles.findIndex(Article => Article._id === id);
    const cloneLikedArticle = { ...cloneOriginalArticles[likedArticleIndex] };
    cloneLikedArticle.isLiked = isLike;
    cloneOriginalArticles[likedArticleIndex] = cloneLikedArticle;

    const cloneLikedArticles = [...likedArticles];
    if (isLike) {
        cloneLikedArticles.push(cloneLikedArticle);
    } else {
        const likedIndex = cloneLikedArticles.findIndex(likedArticle => likedArticle._id === id);
        cloneLikedArticles.splice(likedIndex, 1);
    }

    return { cloneOriginalArticles, cloneLikedArticles };
}

/**
 * @desc for every fetch data for Articles this function checked original data with likedArray to 
 * add isLiked property for change heart icon status
 * @param {*} array originalArticles 
 * @param {*} array likedArticles 
 */
export const checkLiked = (originalArticles, likedArticles) => {
    const cloneOriginalArticles = [...originalArticles];

    cloneOriginalArticles.forEach((item, index) => {
        if (likedArticles.findIndex(i => i._id === item._id) >= 0) {
            const cloneArticle = {...item};
            cloneArticle.isLiked = true;
            cloneOriginalArticles[index] = cloneArticle;
        }
    })
    return cloneOriginalArticles;
}