import React from 'react';
import {Button, Form} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";
import {InputField, TextAreaField} from "react-semantic-redux-form";
import {connect} from "react-redux";
import {addNewsAction} from "../../../../actions/newsActions";
import FileDropzone from "../../../../components/App/components/FileDropzone/FileDropzone";

class NewsForm extends React.Component {


    addNews = (values) => {
        if (values) {
            this.props.addNews(values)
        }
    }

    render() {
        const {handleSubmit, submitButton} = this.props;

        return (
            <Form onSubmit={handleSubmit(this.addNews)}>
                <Field
                    name='key'
                    component={InputField}
                    label='Key'
                    disabled
                    placeholder='Key'
                />

                <Field
                    name='title'
                    component={InputField}
                    label='Title'
                    placeholder='Title'
                />

                <Field
                    name='createDate'
                    component={InputField}
                    disabled
                    label='Create Date'
                    placeholder='Create Date'
                />

                <Field
                    name='description'
                    component={TextAreaField}
                    label='Description'
                    placeholder='Description'
                />

                <div className='field'>
                    <Field
                        name={'images'}
                        component={FileDropzone}
                    />
                </div>



                <Button type='submit'>{submitButton}</Button>

            </Form>
        )
    }
}

const NewsReduxForm = reduxForm({
    form: 'news-form'
})(NewsForm);

const mapDispatchToProps = (dispatch) => {
    return {
        addNews: (values) => {
            dispatch(addNewsAction(values))
        }
    }
}

export default connect(null, mapDispatchToProps)(NewsReduxForm);