import React from 'react';
import {Modal} from "semantic-ui-react";
import NewsForm from "../forms/NewsForm";


class EditNewsModal extends React.Component {


    render() {
        return (
            <Modal
                open={this.props.open}
                onClose={this.props.onClose}
            >
                <Modal.Header>Edit News</Modal.Header>
                <Modal.Content>
                    <NewsForm
                        initialValues={this.props.news}
                        submitButton='Edit'
                    />
                </Modal.Content>
            </Modal>
        )
    }
}

export default EditNewsModal;