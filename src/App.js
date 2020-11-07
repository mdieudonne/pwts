import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation'
import Home from "./containers/Home/Home";
import SimpleAppBar from "./components/SimpleAppBar/SimpleAppBar";
import {makeStyles} from "@material-ui/core/styles";
import Reactions from "./containers/Reactions/Reactions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    spacing: 0,
    justify: 'space-around'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
        <SimpleAppBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/reactions" component={Reactions}/>
        <SimpleBottomNavigation/>
      </BrowserRouter>
    </div>
  )
}

export default App
