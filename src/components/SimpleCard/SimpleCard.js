import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
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
  },
}))

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={props.clicked}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          { props.content.title }
        </Typography>
        <Typography variant="h5" component="h2">
          { props.content.name}
        </Typography>
        <Typography className={classes.description} variant="body2" component="p">
          {props.content.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.content.button}</Button>
      </CardActions>
    </Card>
  );
}
