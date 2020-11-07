import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    height: 120,
    backgroundColor: "lightblue",
  },
}));

function Actions(props) {
  const classes = useStyles()

  const card = (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom align={props.reaction.left ? 'left' : 'right'}>
          {props.reaction.left ? 'Gauche' : 'Droite'}
        </Typography>
        <Typography variant="h5" component="h2" align={props.reaction.left ? 'left' : 'right'}>
          {props.reaction.name}
        </Typography>
      </CardContent>
    </Card>
  )

  return (props.status ?
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          {props.reaction.left ? card : null}
        </Grid>
        <Grid item xs={6}>
          {!props.reaction.left ? card : null}
        </Grid>
      </Grid>
      :
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card className={classes.root}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom align={props.reaction.left ? 'left' : 'right'}>
            </Typography>
            <Typography variant="h5" component="h2" align={props.reaction.left ? 'left' : 'right'}>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
  )
}

export default Actions
