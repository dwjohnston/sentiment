import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        color: theme.palette.primary.contrastText,
    },
});


const AttributionLink = (props) => {
    const { children, classes, className, variant, ...other } = props;
    return <p><a className={classNames(classes.root)} href="https://newsapi.org" _target="blank">
        Powered by newsapi.org
</a></p>;
}

export default withStyles(styles)(AttributionLink); 