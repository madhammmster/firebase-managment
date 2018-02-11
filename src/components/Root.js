import React from 'react';
import {connect} from "react-redux";
import {onAuthStateChanged} from "../actions/firebaseActions";

import App from "./App/App";
import Login from "./Login/Login";
import Fader from "./Fader/Fader";
import {withRouter} from "react-router";


class Root extends React.Component {

    componentDidMount = () => {
        this.props.startListeningToAuthStateChange();
    }

    render() {
        return (
            <div id="outer-container" className="root">
                {this.props.appStatus === 'SIGN_IN' ? (<App/>) : (<Login/>)}
                <Fader/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    appStatus: state.app.status
})

const mapDispatchToProps = (dispatch) => {
    return {
        startListeningToAuthStateChange: () => {
            dispatch(onAuthStateChanged())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));