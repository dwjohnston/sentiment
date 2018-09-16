import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AttributionLink from '../AttributionLink/AttributionLink';



const styles = theme => ({
    root: {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.main,
        padding: '1em',
    },
});


const Header = (props) => {
    const { children, classes, className, variant, ...other } = props;
    return <header className={classNames(classes.root)} >
        <h1> Sentiment Tracker</h1>
        <AttributionLink />
    </header>;
}

export default withStyles(styles)(Header); 