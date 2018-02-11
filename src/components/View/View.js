import React from 'react';
import {
    Route
} from 'react-router-dom'

function View(props) {
    return (
        <Route
            exact={props.item.exact}
            path={props.item.link}
            component={props.item.component}
        >
        </Route>
    );
}

export default View;