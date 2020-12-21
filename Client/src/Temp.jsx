import React from 'react'
import Navbar from './components/Navbar/main'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Product from './container/Product/main'
import Home from './container/Home/main'
import Login from './container/Login/main'
import Sell from './container/Sell/main'


const Temp = (props) => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/sell"><Sell /></Route>
                <Route path="/login"><Login /></Route>
                <Route path="/product"><Product /></Route>
                <Route path="/"><Home/></Route>
            </Switch>
        </BrowserRouter>
        </>
    )

}

export default Temp