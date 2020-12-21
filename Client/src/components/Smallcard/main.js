import React from 'react'
// import './style.css'
/**
* @author
* @function Smallcard
**/

const Smallcard = (props) => {
    return (
        <div class="post-content" data-aos="flip-up" data-aos-delay="200">
            <div class="post-image">
                <div>
                    <img src={require('../../assets/background.jpg')} class="img" alt="blog1" />
                </div>
                <div class="post-info flex-row">
                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;{props.dates},
                2019</span>
                    <span>{props.comments}</span>
                </div>
            </div>
            <div class="post-title">
                <a href="#">{props.links}</a>
            </div>
        </div>
    )

}

export default Smallcard