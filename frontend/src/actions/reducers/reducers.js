import * as Actions from "../actionTypes";

const initialState = {
    articles: [],
};


function generalError(state, payload) {

    return {
        hasError: true,
        error: payload.error
    };
}

function populateArticles(state, payload) {

    return {
        articles: payload.articles
    };
}

function assign(state, data) {
    return Object.assign({}, state, data);
}

export function allReducers(state = initialState, action) {

    switch (action.type) {
        case Actions.POPULATE_ARTICLES: {
            return assign(state, populateArticles(action.payload));
        }

        case Actions.GENERAL_ERROR: {
            return assign(state, generalError(action.payload));
        }

        default:
            return state;
    }
}
