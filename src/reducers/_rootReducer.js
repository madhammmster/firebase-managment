import {combineReducers} from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import {reducer as burgerMenu} from 'redux-burger-menu';
import AppReducer from "./appReducer";
import UserReducer from './userReducer';
import NewsReducer from "./newsReducer";


const RootReducer = combineReducers({
    app: AppReducer,
    form: reduxFormReducer,
    burgerMenu: burgerMenu,
    user: UserReducer,
    news: NewsReducer

});

export default RootReducer;