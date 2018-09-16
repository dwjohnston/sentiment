import * as Actions from "./actionTypes";

export function createPopulateArticlesAction(json) {
    return {
        type: Actions.POPULATE_ARTICLES,
        payload: {
            articles: json.articles
        }
    }
}

export function createGeneralErrorAction(details) {

    console.log(details);
    return {
        type: Actions.GENERAL_ERROR,
        payload: {
            error: details
        }
    };
}

export function fetchAllArticles() {

    return function (dispatch) {
        console.log(dispatch);
        return fetch("/api/v1/all").then(data => data.json())
            .then(json => {
                dispatch(createPopulateArticlesAction(json));
            })
            .catch(error => {
                dispatch(createGeneralErrorAction(error));
            });


        // try {
        //     const data = await fetch("/api/v1/all");
        //     const json = await data.json();
        //     dispatch(
        //         createPopulateArticlesAction(json)
        //     );
        // } catch (error) {
        //     dispatch(
        //         createGeneralErrorAction(error)
        //     );
        // }
    };
}