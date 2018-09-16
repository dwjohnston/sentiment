import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import NewsArticle from '../NewsArticle/NewsArticle';
import { connect } from 'react-redux'
import { fetchAllArticles } from "../../actions/actionCreators"
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        color: theme.palette.primary,
        border: `solid 2px ${theme.palette.primary}`,
        borderRadius: '2em',
        padding: '1em',
    },
    link: {
        color: theme.palette.primary.contrastText
    }
});


const mapStateToProps = state => {
    return {
        articles: state.articles
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => dispatch(fetchAllArticles())
    };
}


const AllArticles = (props) => {
    const { children, classes, className, variant, articles, onClick } = props;
    console.log(articles);
    return <article className={classNames(classes.root)} >

        <Button color="primary" onClick={onClick}> Get articles</Button>

        {articles.map(article => <NewsArticle article={article} />)}
    </article>;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    withStyles(styles)(AllArticles)
); 