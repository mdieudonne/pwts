import React, {useEffect} from 'react';
import useTheme from "@material-ui/core/styles/useTheme";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import logo from '../../assets/images/pwtsra-logo.png';
import logoLight from '../../assets/images/pwtsra-logo-light.png';

const useStyles = makeStyles({
  root: {
    maxWidth: 600
    ,
  },
  media: {
    height: 150,
  },
});

function Association(props) {
  // componentDidMount
  useEffect(() => {
    document.title = 'PWTSRA Training App - Lien vers le site officiel'
    document.getElementsByTagName("meta")["title"].content = 'Lien vers le site officiel de l\'association';
    document.getElementsByTagName("meta")["description"].content = 'Lien vers le site officiel de l\'association De Kung Fu à Lyon';
  }, []);

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid className="fillHeight"
          container
          direction="column"
          justify="center"
          alignItems="center">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={theme.palette.type === 'dark' ? logo : logoLight}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Association
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Progressive Wing Tsun System Rhône Alpes propose des cours de Wing Tsun / Wing Chun Kung fu à Lyon.
              PWTSRA ce sont des techniques d'apprentissage modernes avec des cours structurés et des programmes adaptés
              au niveau des élèves. En savoir plus
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href="https://www.pwts.fr/" target="_blank">
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
