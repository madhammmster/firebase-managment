import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import {deleteNewsAction} from "../../../../actions/newsActions";
import {connect} from "react-redux";


class DeleteNewsModal extends React.Component {

    deleteNews = () => {
        console.log(this.props.news);
        this.props.deleteNews(this.props.news);
    }

    render() {
        return (
            <Modal
                open={this.props.open}
                onClose={this.props.onClose}
            >
                <Modal.Header>
                    Delete News
                </Modal.Header>
                <Modal.Content>
                    <p>Are you sure you want to delete this news</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        negative
                        content='No'
                        onClick={this.props.onClose}
                    />
                    <Button
                        positive
                        labelPosition='right'
                        icon='checkmark'
                        content='Yes'
                        onClick={this.deleteNews}
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        deleteNews: (news) => {
            dispatch(deleteNewsAction(news))
        }
    }
}

export default connect(null,mapDispatchToProps)(DeleteNewsModal);