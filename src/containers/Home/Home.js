import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import {useHistory} from "react-router-dom";

function Home() {
  useEffect(() => {
      setHeight(getHeight())
    }
  )
  const getHeight = () => window.innerHeight - 64 - 56 - 20

  const [height, setHeight] = useState(getHeight());
  console.log(height)

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
    <Grid style={{height}}
          container
          direction="column"
          justify="center"
          alignItems="center">
      <SimpleCard content={cards[0]} clicked={() => history.push(cards[0].link)}/>
    </Grid>
  )
}

export default Home
