import React from 'react'

/**
* @author
* @function Card
**/

const Card = (props) => {
    return (
        <>
            <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                <div className="post-image">
                    <div>
                        <img src={require('../../assets/background.jpg')} className="img" alt="blog1" />
                    </div>
                    <div className="post-info flex-row">
                        <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                        <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                        <span>{props.comments}</span>
                    </div>
                </div>
                <div className="post-title">
                    <a href="#">{props.link}</a>
                    <p>{props.info}</p>
                    <button className="btn post-btn">Read More &nbsp; <i className="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </>
    )

}

export default Card