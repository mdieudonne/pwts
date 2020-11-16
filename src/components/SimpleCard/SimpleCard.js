import React from 'react';
import {Card,CardActions,CardContent,Button,Typography,CardActionArea} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 4,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: 'pointer',
  },
  title: {
    fontSize: 14,
  },
  description: {
    marginTop: 12,
    height: 80,
  },
}))

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.clicked}>
      <CardActionArea>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.content.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.content.name}
        </Typography>
        <Typography className={classes.description} variant="body2" component="p">
          {props.content.description}
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">{props.content.button}</Button>
      </CardActions>
    </Card>
  );
}
