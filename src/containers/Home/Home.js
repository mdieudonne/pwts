import React from 'react';
import '../../App.css'

import Grid from '@material-ui/core/Grid';
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import {useHistory} from "react-router-dom";

function Home() {
  const cards = [
    {
      title: 'Entrainement',
      name: 'Réactions de bases',
      description: 'Affiche de manière aléatoire <br/> les réactions de bases à éxécuter.',
      button: 'C\'est parti !',
      link: '/reactions'
    }
  ]

  const history = useHistory();

  return (
    <Grid className="fillHeight"
          container
          direction="column"
          justify="center"
          alignItems="center">
      <SimpleCard content={cards[0]} clicked={() => history.push(cards[0].link)}/>
    </Grid>
  )
}

export default Home
