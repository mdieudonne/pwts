import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function SimpleAppBar() {
  return (
    <AppBar position="static" style={{marginBottom: 20}}>
      <Toolbar>
        <Typography variant="h6">
          Progressive Wing Tsun System
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleAppBar
