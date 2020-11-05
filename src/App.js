import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation'
import Home from "./containers/Home/Home";
import Box from "@material-ui/core/Box";
import SimpleAppBar from "./components/SimpleAppBar/SimpleAppBar";

function App() {

  return (
    <BrowserRouter>
      <Box height="100vh" display="flex" flexDirection="column">
        <SimpleAppBar/>
        <Route path="/" exact render={() => <Home/>}/>
        <SimpleBottomNavigation/>
      </Box>
    </BrowserRouter>
  )
}

export default App
