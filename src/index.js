import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import Root from "./components/Root";

import store from "./store";

ReactDOM.render(
    (
        <Provider store={store}>
            <Router>
                <Root/>
            </Router>
        </Provider>
    )
    , document.getElementById('root')
);

