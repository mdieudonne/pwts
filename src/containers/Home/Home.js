import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const cards = [
  {
    title: 'Entrainement',
    name: 'Réactions de bases',
    description: 'Affiche de manière aléatoire <br/> les réactions de bases à éxécuter.',
    button: 'C\'est parti !',
    link: '/reactions'
  },
]

function Home() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        {cards.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <SimpleCard content={card} clicked={() => history.push(card.link)}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Home
