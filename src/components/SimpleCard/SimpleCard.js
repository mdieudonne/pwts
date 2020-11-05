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
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} onClick={props.clicked}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Entrainement
        </Typography>
        <Typography variant="h5" component="h2">
          Réactions de bases
        </Typography>
        <Typography className={classes.description} variant="body2" component="p">
          Affiche de manière aléatoire
          <br/>
          les réactions de bases à éxécuter.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">C'est parti !</Button>
      </CardActions>
    </Card>
  );
}
