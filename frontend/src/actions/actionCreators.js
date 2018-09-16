import * as Actions from "./actionTypes";

export function createPopulateArticlesAction(articles) {
    return {
        type: Actions.POPULATE_ARTICLES,
        payload: {
            articles: articles
        }
    }
}

export function createGeneralErrorAction(details) {
    return {
        type: Actions.GENERAL_ERROR,
        payload: {
            error: details
        }
    };
}

export function fetchAllArticles() {

    return async (dispatch) => {
        try {
            const data = await fetch("/api/v1/all");
            const json = await data.json();
            dispatch(
                createPopulateArticlesAction(json)
            );
        } catch (error) {
            dispatch(
                createGeneralErrorAction(error)
            );
        }
    };
}