import React from 'react';

import './FaderStyles.scss';
import {connect} from "react-redux";
import {Dimmer, Loader} from "semantic-ui-react";
import {PERFORM_REQUEST} from "../../constants";

class Fader extends React.Component {


    render() {

        if(this.props.app.status === PERFORM_REQUEST){
            return (
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
            )
        }else{
            return null;
        }



    }
}

const mapStateToProps = (state) => ({
    app: state.app
})

export default connect(mapStateToProps)(Fader);