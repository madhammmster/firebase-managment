import React from 'react';
import {Button, Form, Header, Icon, Message, Segment} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {InputField} from "react-semantic-redux-form";
import {signInWithEmailAndPassword} from "../../actions/firebaseActions";
import {connect} from "react-redux";

class LoginForm extends React.Component {

    state = {
        error: {
            showError: false,
            messageHeader: '',
            message: ''
        }
    }

    signInUser = (values) => {
        if (values.email && values.password) {
            this.props.signIn(values);
        } else {
            this.setState(
                {
                    error: {
                        showError: true,
                        messageHeader: 'No email or password',
                        message: 'Please complete email and password'
                    }
                }
            )
        }
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <Segment>
                <Header as='h2'>
                    <Icon name='user'/>
                    <Header.Content>
                        Log In
                    </Header.Content>
                </Header>
                <Form onSubmit={handleSubmit(this.signInUser)}>
                    <Field
                        name='email'
                        component={InputField}
                        label='Email'
                        placeholder='Email'
                    />

                    <Field
                        name='password'
                        component={InputField}
                        label='Password'
                        type='password'
                        placeholder='Password'
                    />


                    <Button type='submit'>Submit</Button>

                </Form>

                {
                    this.state.error.showError ?
                    (
                        <Message
                            error
                            header={this.state.error.messageHeader}
                            content={this.state.error.message}
                        />
                    ) : null
                }

            </Segment>
        )
    }
}

const componentWithReduxForm = reduxForm({
    form: 'login-form'
})(LoginForm);

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (values) => {
            dispatch(signInWithEmailAndPassword(values.email, values.password))
        }
    }
}

export default connect(null, mapDispatchToProps)(componentWithReduxForm);