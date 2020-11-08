import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import SimpleAppBar from "./components/SimpleAppBar/SimpleAppBar";
import Home from "./containers/Home/Home";
import Reactions from "./containers/Reactions/Reactions";
import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";

import {deepOrange, deepPurple, lightBlue, orange} from "@material-ui/core/colors";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100vw',
    height: '100vh',
    spacing: 0,
    justify: 'space-around',
  },
}));

function App() {
  const classes = useStyles();

  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <BrowserRouter>
          <SimpleAppBar darkState={darkState} handleThemeChange={handleThemeChange}/>
          <Paper className="fillHeight" square elevation={0} style={{backgroundColor: darkTheme.palette.background.default}}>

          <Route path="/" exact component={Home}/>
          <Route path="/reactions" component={Reactions}/>
          </Paper>
          <SimpleBottomNavigation/>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
