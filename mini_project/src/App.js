import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './Share/Header/Header';
import Home from './Router/Home/Home';
import Photo from './Router/Photo/Photo';
import ProductAPI from './Api/ProductAPI';
import Detail from './Router/Detail/Detail';
import Cart from './Router/Cart/Cart';
import SignIn from './Router/Auth/SignIn';
import SignUp from './Router/Auth/SignUp';

function App() {

  useEffect(() => {

    const fetchAPIProduct = async () => {
      try {
        
        const params = {
          page: 1,
          count: 6,
          search: ""
        }

        const response = await ProductAPI.getPagination(params)
        console.log(response)

      } catch (error) {
        console.log("Fail to connect")
      }
    }

    fetchAPIProduct()

  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>

          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/photo' component={Photo}/>
          
          <Route path='/detail' component={Detail}/>

          <Route path='/cart' component={Cart}/>

          <Route path='/login' component={SignIn} />
          
          <Route path='/signup' component={SignUp}/>

        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
