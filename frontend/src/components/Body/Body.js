import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        color: theme.palette.text.primary,
        padding: "0 1em",
        background: theme.palette.background.default,
    },
});


const Body = (props) => {
    const { children, classes, className, variant, ...other } = props;
    return <section className={classNames(classes.root, className)} >
        {children}
    </section>;
}

export default withStyles(styles)(Body); 