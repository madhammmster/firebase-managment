import {SIGN_IN, SIGN_IN_SUCCESS} from "../constants";


const initialState = {
    isLogged: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return state;
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export default userReducer;