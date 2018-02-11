import React from 'react';
import {Button, Container, Grid} from "semantic-ui-react";
import AddNewsModal from "./components/AddNews/AddNewsModal";
import TableNews from "./components/TableNews/TableNews";
import {connect} from "react-redux";
import DeleteNewsModal from "./components/DeleteNews/DeleteNewsModal";
import EditNewsModal from "./components/EditNews/EditNewsModal";


class News extends React.Component {


    state = {
        addNewsModalVisible: false,
        deleteNewsModalVisible: false,
        editNewsModalVisible: false
    };

    showAddNewsModal = () => {
        this.setState({addNewsModalVisible: true})
    }

    hideAddNewsModal = () => {
        this.setState({addNewsModalVisible: false})
    }

    showDeleteNewsModal = () => {
        this.setState({deleteNewsModalVisible: true})
    }

    hideDeleteNewsModal = () => {
        this.setState({deleteNewsModalVisible: false})
    }

    showEditNewsModal = () => {
        this.setState({editNewsModalVisible: true})
    }

    hideEditNewsModal = () => {
        this.setState({editNewsModalVisible: false})
    }

    render() {
        return (
            <Container>
                <h1>News</h1>
                <Grid>
                    <Grid.Column textAlign='right'>
                        <Button
                            icon='remove'
                            content='Delete news'
                            disabled={this.props.activeNews === null}
                            onClick={this.showDeleteNewsModal}
                        />
                        <Button
                            icon='edit'
                            content='Edit news'
                            disabled={this.props.activeNews === null}
                            onClick={this.showEditNewsModal}
                        />
                        <Button
                            icon='plus'
                            content='Add news'
                            onClick={this.showAddNewsModal}
                        />
                    </Grid.Column>
                </Grid>

                <TableNews/>

                <DeleteNewsModal
                    open={this.state.deleteNewsModalVisible}
                    onClose={this.hideDeleteNewsModal}
                    news={this.props.activeNews}
                />
                {
                    this.props.activeNews ?
                        (<EditNewsModal
                            open={this.state.editNewsModalVisible}
                            onClose={this.hideEditNewsModal}
                            news={this.props.activeNews}
                        />)
                        :
                        null
                }


                <AddNewsModal
                    open={this.state.addNewsModalVisible}
                    onClose={this.hideAddNewsModal}
                />


            </Container>
        )
    }
}


const mapStateToProps = (state) => ({
    activeNews: state.news.activeNews
})

export default connect(mapStateToProps)(News);