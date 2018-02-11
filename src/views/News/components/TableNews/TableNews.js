import React from 'react';
import {Grid, Loader, Table} from "semantic-ui-react";
import {getNews} from "../../../../actions/newsActions";
import {connect} from "react-redux";
import TableNewsRow from "./TableNewsRow";


class TableNews extends React.Component {


    tableNews = null;

    componentDidMount = () => {
        this.props.getNews();
    }

    createTableNews = () => {
        const newTableNews = [];
        if (this.props.newsList) {
            Object.keys(this.props.newsList).forEach((key) => {
                let news = this.props.newsList[key];
                news['key'] = key;
                newTableNews.unshift(news);
            });
        }
        this.tableNews = newTableNews;
    }

    render() {

        this.createTableNews();
        return (
            <Grid>
                <Grid.Row>
                    <Table celled selectable size='small'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell width={2}>Key</Table.HeaderCell>
                                <Table.HeaderCell width={4}>Title</Table.HeaderCell>
                                <Table.HeaderCell width={2}>Create Date</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {
                                this.tableNews ? (
                                    this.tableNews.map((news) => (
                                    <TableNewsRow key={news.key} news={news}/>
                                ))
                            ): null

                            }
                        </Table.Body>
                    </Table>
                    {this.tableNews == null ? (<Loader active inline='centered'/>) : null}
                </Grid.Row>
            </Grid>

        )
    }
}

const mapStateToProps = (state) => ({
    newsList: state.news.newsList
})

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: () => {
            dispatch(getNews());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableNews);