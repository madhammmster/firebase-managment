import React from 'react';
import {Grid} from "semantic-ui-react";
import LoginForm from "./LoginForm";

class Login extends React.Component {

    render() {
        return (
            <div className="Login">
                <Grid verticalAlign='middle' centered columns={3} style={{height: '100vh'}}>
                    <Grid.Column>
                        <LoginForm/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
export default Login;
