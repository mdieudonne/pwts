import React, {useEffect} from 'react';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";
import AccessibilityIcon from '@material-ui/icons/Accessibility';

const useStyles = makeStyles({
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

function SimpleBottomNavigation() {
  const classes = useStyles();
  const routes = ['/', '/reactions']

  useEffect(() => {
    history.listen((location) => {
      setValue(routes.findIndex(el => el === location.pathname))
    })
  })


  const [value, setValue] = React.useState(0);
  let history = useHistory();

  return (
    <BottomNavigation
      className={classes.stickToBottom}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(routes[newValue])
      }}
      showLabels
    >
      <BottomNavigationAction label="Accueil" icon={<AccessibilityIcon/>}/>
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation
