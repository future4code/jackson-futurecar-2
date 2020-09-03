import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  boxFlex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    width: "10%",
  },
  card: {
    width: "95%",
    backgroundColor: "#C0C0C0",
    margin: "4% 4% ",
  },
}));

export default function Itens(props) {
  const classes = useStyles();
  return (
    <Grid item lg={3} md={4} sm={6} xs={12} key={props.id}>
      <Box className={classes.boxFlex}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Car"
              height="100"
              image="/images/cars.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h5">
                {props.name}
              </Typography>

              <Typography gutterBottom variant="h5" component="h3">
                R$ {props.price}
              </Typography>

              <Typography
                gutterBottom
                variant="display3"
                noWrap="true"
                component="h4"
              >
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Grid>
  );
}
