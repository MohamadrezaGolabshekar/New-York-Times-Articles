import axios from 'axios';

/**
 * @NOTE : it is not a good idea to use these private data in code
 * and I wanted to use .env and add it to gitIgnore and send it to you separately 
 * but just to make it easy for you I prefer to add it here
 */
const apikey = 'qyyoGIktN5iIMvApp2Tr6tkuVuoE1Npg';

/**
 * I use this fetch function in main page and to get resumes like comics and series ,...
 * @param {*} api
 * @param {*} queryObj 
 * @param {*} cancelToken 
 */
export const getData = (api, queryObj = { page: 0 }, cancelToken) => {

    // here I change a query object to query string to join to our main api url
    let queryString = '';
    if (Object.keys(queryObj).length) {
        for (let i in queryObj) {
            queryString += `&${i}=${queryObj[i]}`;
        }
    }

    return new Promise((resolve, reject) => {
        axios.get(`${api}?api-key=${apikey}${queryString}`, { cancelToken })
            .then(response => {
                resolve(response.data.response);
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                  } else {
                    reject(error);
                  }
            });
    })
}