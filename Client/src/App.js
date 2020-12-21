import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch} from 'module';
import Footer from './components/Footer/main';
import Hero from './components/Hero/main';
import Information from './components/Information/main';
import Navbar from './components/Navbar/main';
import Product from './container/Product/main';
import Home from './container/Home/main';
import Login from './container/Login/main';
import Sell from './container/Sell/main'
import Temp from './Temp'
function App() {
  return (
    <>
      <Temp/>
      {/* <Navbar />
      <Hero />
      <Information />
      <Footer /> */}
      {/* <Product /> */}
      {/* <Sell /> */}
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Route>
      
       <Home />
        <Route path='/' exact component={Home} /> */}
        {/* <Route path='/product' component={Product}/>
      </Route> */}
    </>
  );
}

export default App;