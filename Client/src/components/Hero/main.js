import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const Hero = (props) => {
    return (
        <>
            <section className="site-title">
                <div className="site-background" data-aos="fade-up" data-aos-delay="100">
                    <h3>The farmer has to be an optimist or he wouldn't still be a farmer.</h3>
                    <h1>A farm is more than land and crops.</h1>
                    <h3>Agriculture not only gives riches to a nation, but the only riches she can call her own.Agriculture
                    not only gives riches to a nation, but the only riches she can call her own</h3>
                    <NavLink to="/Sell">
                        <button className="btn">Sell Now</button>
                    </NavLink>
                </div>
            </section>
        </>
    )

}

export default Hero