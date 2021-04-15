import React from 'react';
import './App.css';
import HomeScreen from "./HomeScreen";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Details from './Details';

function App() {
  return (
    <BrowserRouter>
      
      
      <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/details" component={Details}  />
      </Switch>

      
    </BrowserRouter>
  );
}

export default App;
 