import {ADD_NEWS_SUCCESS, DELETE_NEWS_SUCCESS, PERFORM_REQUEST, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS} from "../constants";

const initialState = {
    status: 'active'
}

const AppReducer = (state = initialState, action) => {
    switch (action.type){
        case PERFORM_REQUEST:
            return Object.assign({}, state, {status: 'PERFORM_REQUEST'});
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {status: 'SIGN_IN'});
        case SIGN_OUT_SUCCESS:
            return Object.assign({}, state, {status: 'SIGN_OUT'});
        case ADD_NEWS_SUCCESS:
            return Object.assign({}, state, {status: 'SIGN_IN'});
        case DELETE_NEWS_SUCCESS:
            return Object.assign({}, state, {status: 'SIGN_IN'});
        default:
            return state;
    }
};

export default AppReducer;