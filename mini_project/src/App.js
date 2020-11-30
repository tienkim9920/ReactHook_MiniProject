import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Share/Header/Header';
import Home from './Router/Home/Home';
import Photo from './Router/Photo/Photo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>

          <Route exact path='/home' component={Home}/>
          <Route path='/photo' component={Photo}/>
          
        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
