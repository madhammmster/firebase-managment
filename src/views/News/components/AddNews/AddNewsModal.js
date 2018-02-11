import React from 'react';
import {Modal} from "semantic-ui-react";
import AddNewsForm from "../forms/NewsForm";


class AddNewsModal extends React.Component {

    render() {


        const initialValues = {
            createDate: new Date().toISOString().substring(0, 10)
        }
        return (
            <Modal
                open={this.props.open}
                onClose={this.props.onClose}
                onOpen={this.onOpen}
            >
                <Modal.Header>Add News</Modal.Header>
                <Modal.Content>
                    <AddNewsForm
                        initialValues={initialValues}
                        submitButton='Add'
                    />
                </Modal.Content>
            </Modal>
        )
    }
}

export default AddNewsModal;