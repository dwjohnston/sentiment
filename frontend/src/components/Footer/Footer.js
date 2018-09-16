import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        padding: '1em',
    },
    link: {
        color: theme.palette.primary.contrastText
    }
});


const Footer = (props) => {
    const { children, classes, className, variant, ...other } = props;
    return <footer className={classNames(classes.root)} >


    </footer>;
}

export default withStyles(styles)(Footer); 