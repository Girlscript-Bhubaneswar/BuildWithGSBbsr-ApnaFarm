import React from 'react'
import Footer from '../../components/Footer/main'
import Hero from '../../components/Hero/main'
import Information from '../../components/Information/main'
import Navbar from '../../components/Navbar/main'

/**
* @author
* @function Home
**/

const Home = (props) => {
    return (
        <>
            <Navbar />
            <Hero />
            <Information />
            <Footer />
        </>
    )

}

export default Home