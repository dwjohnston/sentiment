import React from 'react';
import classNames from 'classnames';
import { } from '@material-ui/core/styles';
import { connect } from 'react-redux'

import injectSheet from 'react-jss'


const styles = theme => ({
    root: (props) => {
        console.log(props);
        return {
            color: theme.palette.error.contrastText,
            background: theme.palette.error.light,
            border: `2px solid ${theme.palette.error.main}`,
            padding: '1em',
            display: props.display ? "block" : "none",
        }
    },
});

const mapStateToProps = state => {
    return {
        error: state.error,
        display: state.hasError
    };
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

const ErrorBanner = (props) => {
    const { children, classes, className, variant, error, display } = props;
    return <section className={classes.root} >
        <p>
            Uh oh, something went wrong.

        </p>
    </section>;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    injectSheet(styles)(ErrorBanner)
); 