import React from 'react';
import {AppBar, Switch, Toolbar, Typography} from '@material-ui/core';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import logo from "../../assets/images/pwtsra-logo.png";
import logoLight from "../../assets/images/pwtsra-logo-light.png";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {},
  title: {
    flexGrow: 1,
  },
  img: {
    height: 44,
  }
}));


function SimpleAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="div" className={classes.title}>
          <img src={theme.palette.type === 'dark' ? logo : logoLight} className={classes.img}/>
        </Typography>
        <Switch checked={props.darkState} onChange={props.handleThemeChange}/>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleAppBar
