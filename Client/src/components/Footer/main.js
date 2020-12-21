import React from 'react'

/**
* @author
* @function Footer
**/

const Footer = (props) => {
  return(
    <footer className="footer">
    <div className="container">
        <div className="about-us" data-aos="fade-right" data-aos-delay="200">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
                iure, autem nulla tenetur repellendus.</p>
        </div>
        <div className="newsletter" data-aos="fade-right" data-aos-delay="200">
            <h2>Newsletter</h2>
            <p>Stay update with our latest</p>
            <div className="form-element">
                <input type="text" placeholder="Email" /><span><i className="fas fa-chevron-right"></i></span>
            </div>
        </div>
        <div className="instagram" data-aos="fade-left" data-aos-delay="200">
            <h2>Instagram</h2>
            <div className="flex-row">
                <img src={require('../../assets/product-1.jpg')} alt="insta1" />
                <img src={require('../../assets/product-2.jpg')} alt="insta2" />
                <img src={require('../../assets/product-3.jpg')} alt="insta3" />
            </div>
            <div className="flex-row">
                <img src={require('../../assets/product-4.jpg')} alt="insta4" />
                <img src={require('../../assets/product-5.jpg')} alt="insta5" />
                <img src={require('../../assets/product-6.jpg')} alt="insta6" />
            </div>
        </div>
        <div className="follow" data-aos="fade-left" data-aos-delay="200">
            <h2>Follow us</h2>
            <p>Let us be Social</p>
            <div>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div className="rights flex-row">
        <h4 className="text-gray">
            Copyright ©2019 All rights reserved
        </h4>
    </div>
</footer>
   )

 }

export default Footer