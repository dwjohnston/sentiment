import * as Actions from "../actionTypes";

const initialState = {
    articles: [],
};


function generalError(state, payload) {

    console.log(payload);
    return {
        hasError: true,
        error: payload.error
    };
}

function populateArticles(state, payload) {

    console.log(payload);
    return {
        articles: payload.articles
    };
}

function assign(state, data) {
    return Object.assign({}, state, data);
}

export function allReducers(state = initialState, action) {

    console.log(action);
    switch (action.type) {
        case Actions.POPULATE_ARTICLES: {
            return assign(state, populateArticles(state, action.payload));
        }
        case Actions.GENERAL_ERROR: {
            return assign(state, generalError(state, action.payload));
        }
        default:
            return state;
    }
}
