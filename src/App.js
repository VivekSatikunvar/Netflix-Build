import React from 'react';
import './App.css';
import HomeScreen from "./HomeScreen";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Details from './Details';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      
      <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/details" component={Details}  />
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
 