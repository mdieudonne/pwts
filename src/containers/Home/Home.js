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

function Home() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <SimpleCard clicked={() => history.push('/reactions')}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
