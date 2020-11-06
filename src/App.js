import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import SimpleBottomNavigation from './components/SimpleBottomNavigation/SimpleBottomNavigation'
import Home from "./containers/Home/Home";
import Box from "@material-ui/core/Box";
import SimpleAppBar from "./components/SimpleAppBar/SimpleAppBar";
import Reactions from "./containers/Reactions/Reactions";

function App() {

  return (
    <BrowserRouter>
      <Box height="100vh" display="flex" flexDirection="column">
        <SimpleAppBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/reactions" component={Reactions}/>
        <SimpleBottomNavigation/>
      </Box>
    </BrowserRouter>
  )
}

export default App
