import React, { useState } from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import EcoIcon from '@material-ui/icons/Eco';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css'

const Navbar = (props) => {

    const [state, setState] = useState({ clicked: false })

    const handelClick = () => {
        setState({ clicked: !state.clicked })
    }

    return (
        <>
            <div className="NavbarItems">
                <h1 className="navbar_logo">Farmer<EcoIcon className="leaf_icons" /></h1>

                {state.clicked ? (
                    <div className="menu_icon" onClick={handelClick}>
                        <CloseIcon className="icons" />
                    </div>
                ) : (
                        <div className="menu_icon" onClick={handelClick}>
                            <MenuIcon className="icons" />
                        </div>
                    )}

                <ul className={state.clicked ? 'nav_menu active' : 'nav_menu'}>
                    <li><NavLink className='nav-links' to="/">Home</NavLink></li>
                    <li><NavLink className='nav-links' to="/services">Services</NavLink></li>
                    <li><NavLink className='nav-links' to="/product">Products</NavLink></li>
                    <li><NavLink className='nav-links' to="/contact-us">Contact Us</NavLink></li>
                    {/* <li><NavLink className='nav-links' to="/Sell">Sell</NavLink></li> */}
                    <li><NavLink className='nav-links-mobile' to="/login">Login</NavLink></li>
                </ul>
                <NavLink to="/login"><Button/></NavLink>
            </div>
        </>
    )

}

export default Navbar