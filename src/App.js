import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core';

import SimpleBottomNavigation from './Components/BottomNavigation/BottomNavigation'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true}>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        <Button color="primary">Hello World</Button>;
        <SimpleBottomNavigation></SimpleBottomNavigation>
      </Container>
    </React.Fragment>
    )
}

export default App
