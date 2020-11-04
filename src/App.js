import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core';

import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation'

function App() {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Container disableGutters={true}>
        <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}}/>
        <Button color="primary">Hello World</Button>;
        <SimpleBottomNavigation/>
      </Container>
    </BrowserRouter>
  )
}

export default App
