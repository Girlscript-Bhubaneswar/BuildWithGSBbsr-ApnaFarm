import React from 'react'
import './style.css'
import Footer from '../../components/Footer/main'
import Hero from '../../components/Hero/main'
import Navbar from '../../components/Navbar/main'
import Login from '../Login/main'
import Carousel from './Carousel/main'
import Productcontainer from './Productcontainer/main'

/**
* @author
* @function Product
**/

const Product = (props) => {
  return(
      <>
        <Navbar />
        <Hero />
        {/* <Carousel /> */}
        <Productcontainer />
        <Footer />
        {/* <Login /> */}
      </>  
   )

 }

export default Product