import {ADD_NEWS, ADD_NEWS_SUCCESS, DELETE_NEWS_SUCCESS, GET_NEWS_SUCCESS, SET_ACTIVE_NEWS} from "../constants";


const initialState = {
    newsList: null,
    activeNews: null
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return state;
        case ADD_NEWS_SUCCESS:
            return state;
        case GET_NEWS_SUCCESS:
            return Object.assign({}, state, {newsList: action.payload});
        case SET_ACTIVE_NEWS:
            return Object.assign({}, state, {activeNews: action.payload});
        case DELETE_NEWS_SUCCESS:
            return Object.assign({}, state, {activeNews: null});
        default:
            return state;
    }
};

export default newsReducer;