import React from 'react';
import './App.css';
import {Route, Switch} from 'module';
import Footer from './components/Footer/main';
import Hero from './components/Hero/main';
import Information from './components/Information/main';
import Navbar from './components/Navbar/main';
import Product from './container/Product/main';
import Home from './container/Home/main';
import Login from './container/Login/main';

function App() {
  return (
    <>
      {/* <Navbar />
      <Hero />
      <Information />
      <Footer /> */}
      {/* <Product /> */}
      <Home />
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