import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    color: theme.palette.primary,
    border: `solid 2px ${theme.palette.primary}`,
    borderRadius: "2em",
    padding: "1em"
  },
  link: {
    color: theme.palette.primary.contrastText
  }
});

const NewsArticle = props => {
  const { children, classes, className, variant, article } = props;
  return (
    <article className={classNames(classes.root)}>
      <p>{article.title}</p>
      <p>{article.source.id}</p>

      <p>{article.description}</p>
    </article>
  );
};

export default withStyles(styles)(NewsArticle);
