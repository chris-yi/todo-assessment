import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Todos from "./Components/Todos/Todos";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/*COMP 42G*/}
        <Switch>
          {/*COMP 42F*/}
          <Route path='/' component={Home} exact/>
          <Route path='/todos' component={Todos}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

