import {applyMiddleware, createStore} from "redux";
import RootReducer from "./reducers/_rootReducer";
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const store = createStore(
    RootReducer,
    // applyMiddleware(logger, thunk)
    applyMiddleware( thunk)
);
export default store;