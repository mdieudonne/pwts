import React, {useEffect} from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import logo from '../../assets/images/pwtsra-logo.png';
import logoLight from '../../assets/images/pwtsra-logo-light.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 600
    ,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

function Association() {
  // componentDidMount
  useEffect(() => {
    document.title = 'PWTSRA Training App - Lien vers le site officiel'
    document.getElementsByTagName("meta")["title"].content = 'Lien vers le site officiel de l\'association';
    document.getElementsByTagName("meta")["description"].content = 'Lien vers le site officiel de l\'association De Kung Fu à Lyon';
  }, []);

  const classes = useStyles();
  const theme = useTheme();

  const imgStyle = {
    maxWidth: 300,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  }

  return (
    <Grid className="fillHeight"
          container
          direction="column"
          justify="center"
          alignItems="center">
      <Card className={classes.root}>
        {/*<CardActionArea>*/}
        <CardMedia>
          <img src={theme.palette.type === 'dark' ? logo : logoLight} style={imgStyle}/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Association
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Progressive Wing Tsun System Rhône Alpes propose des cours de Wing Tsun / Wing Chun Kung fu à Lyon.
            PWTSRA ce sont des techniques d'apprentissage modernes avec des cours structurés et des programmes adaptés
            au niveau des élèves.
          </Typography>
        </CardContent>
        {/*</CardActionArea>*/}
        <CardActions>
          <a href="https://www.pwts.fr/" target="_blank" style={{textDecoration: 'none'}}>
            <Button size="small" color="primary">
              En savoir plus !
            </Button>
          </a>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Association
