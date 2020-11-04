import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {},
});

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  let history = useHistory();

  function handleClick() {
    history.push("/reactions");
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction to={'/'} label="Accueil" icon={<AccessibilityIcon/>}/>
      <BottomNavigationAction to={'/reaction'} onClick={handleClick} label="Réactions" icon={<AccessibilityIcon/>}/>
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation
