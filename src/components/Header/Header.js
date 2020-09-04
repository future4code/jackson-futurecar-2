import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    justifyContent: "space-between",
  },
  logo: {
    width: "100px",
  },

  search: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.title}>
        <img src="./images/4cars.png" alt="logo" className={classes.logo} />

        <Button
          color="background"
          showCar={props.showCar}
          onClick={props.changeCar}
        >
          {props.showCar ? "Vender" : "Voltar"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
