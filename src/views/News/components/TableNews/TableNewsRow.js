import React from 'react';
import {Table} from 'semantic-ui-react';
import {setActiveNews} from "../../../../actions/newsActions";
import {connect} from "react-redux";


class TableNewsRow extends React.Component {

    render() {
        const {news} = this.props;

        return (
            <Table.Row
                key={news.key}
                active={(this.props.activeNews && (this.props.activeNews.key === news.key))}
                onClick={() => {
                    if ((this.props.activeNews && (this.props.activeNews.key === news.key))) {
                        this.props.setActiveNews(null);
                    } else {
                        this.props.setActiveNews(news);
                    }
                }}
            >
                <Table.Cell>{news.key}</Table.Cell>
                <Table.Cell>{news.title}</Table.Cell>
                <Table.Cell>{news.createDate}</Table.Cell>
                <Table.Cell style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    maxWidth: '1px',
                    textOverflow: 'ellipsis'
                }}>{news.description}</Table.Cell>
            </Table.Row>
        )
    }
}

const mapStateToProps = (state) => ({
    activeNews: state.news.activeNews
})


const mapDispatchToProps = (dispatch) => {
    return {
        setActiveNews: (news) => {
            dispatch(setActiveNews(news))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableNewsRow);