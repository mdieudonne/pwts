import React, {useEffect} from 'react';
import '../../App.css'
import {Grid} from '@material-ui/core';
import SimpleCard from "../../components/SimpleCard/SimpleCard";
import {useHistory} from "react-router-dom";

function Home() {
  // componentDidMount
  useEffect(() => {
    document.title = 'PWTSRA - Association de Kung Fu à Lyon présente ses programmes d\'entraînement'
    document.getElementsByTagName("meta")["title"].content = 'Progressive Wing Tsun System Rhône Alpes - Programmes d\'entraînement au Wing Chun';
    document.getElementsByTagName("meta")["description"].content = 'Page de sélection des programmes d\'entraînement au Wing Tsun Progressive System.';
  }, []);

  const cards = [
    {
      title: 'Entrainement',
      name: 'Réactions de bases',
      description: 'Affiche de manière aléatoire les réactions de bases.',
      button: 'C\'est parti !',
      link: '/reactions'
    },
    {
      title: 'PWTSRA',
      name: 'Site de l\'association',
      description: 'Brève description et lien vers le site officiel pour connaître toutes les informations utiles, comme les prochains stage de Kung Fu à Lyon.',
      button: 'Je me renseigne !',
      link: '/association',
    }
  ]

  const history = useHistory();

  return (
    <Grid className="fillHeight"
          container
          direction="row"
          justify="center"
          alignItems="center">
      {cards.map((card, index) =>
        <Grid key={index} item xs={12} md={6}>
          <SimpleCard content={card} clicked={() => history.push(card.link)}/>
        </Grid>
      )}
    </Grid>
  )
}

export default Home
