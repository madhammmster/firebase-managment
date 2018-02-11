import React, {Component} from 'react';
import {connect} from "react-redux";
import {signOut} from "../../actions/firebaseActions";
import {Button, Container,  Grid, Header, Icon} from "semantic-ui-react";

import './AppStyles.scss';
import View from "../View/View";
import Dashboard from "../../views/Dashboard/Dashboard";
import News from "../../views/News/News";
import Settings from "../../views/Settings/Settings";
import Menu from "./components/Menu/Menu";
import {withRouter} from "react-router";


const views = [
    {name: 'Dashboard', link: '/', component: Dashboard, exact: true},
    {name: 'News', link: '/news', component: News, exact: true},
    {name: 'Settings', link: '/settings', component: Settings, exact: true}
];

class App extends Component {

    render() {
        return (
            <div id="page-wrap" className="app">
                <Menu menuItems={views} />

                <Container>
                    <Grid columns={2} verticalAlign='middle' centered>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as='h2'>
                                    <Icon name='code'/>
                                    <Header.Content>
                                        Firebase managment
                                        <Header.Subheader>
                                            App status: {this.props.status}
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Grid.Column>
                            <Grid.Column textAlign='right'>
                                <Button
                                    onClick={this.props.signOutUser}
                                >
                                    Sign out
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            {views.map((view) => <View key={view.name} item={view}/>)}
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    status: state.app.status,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    signOutUser: () => dispatch(signOut())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
