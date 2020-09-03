import React, { Component } from "react";
import Button from "@material-ui/core/Button";

/* const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
}); */

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: "20px",
    padding: "30px",
  },
  children: {
    color: "red",
  },
});

export default function botao(props) {
  const classes = styles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.margin}>
        Vender
      </Button>
    </div>
  );
}
