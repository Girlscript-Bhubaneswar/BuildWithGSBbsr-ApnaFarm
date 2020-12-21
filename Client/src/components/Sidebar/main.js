import React from 'react'
import Smallcard from '../Smallcard/main'

const Sidebar = (props) => {
    return (
        <aside className="sidebar">
            <div className="category">
                <h2>Category</h2>
                <ul className="category-list">
                    <li className="list-items" data-aos="fade-left" data-aos-delay="100">
                        <a href="#">Software</a>
                        <span>(05)</span>
                    </li>
                    <li className="list-items" data-aos="fade-left" data-aos-delay="200">
                        <a href="#">Techonlogy</a>
                        <span>(02)</span>
                    </li>
                    <li className="list-items" data-aos="fade-left" data-aos-delay="300">
                        <a href="#">Lifestyle</a>
                        <span>(07)</span>
                    </li>
                    <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                        <a href="#">Shopping</a>
                        <span>(01)</span>
                    </li>
                    <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                        <a href="#">Food</a>
                        <span>(08)</span>
                    </li>
                </ul>
            </div>
            <div className="popular-post">
                <h2>Popular Post</h2>
                <Smallcard comments="03 Commets" links="The story of family farming underscores a legacy of sustainability." dates="January 24"/>
                <Smallcard comments="09 Commets" links="The story of family farming underscores a legacy of sustainability." dates="June 14"/>
                <Smallcard comments="16 Commets" links="The story of family farming underscores a legacy of sustainability." dates="March 02"/>
                <Smallcard comments="02 Commets" links="The story of family farming underscores a legacy of sustainability." dates="April 09"/>
                <Smallcard comments="12 Commets" links="The story of family farming underscores a legacy of sustainability." dates="November 19"/>
                <Smallcard comments="20 Commets" links="The story of family farming underscores a legacy of sustainability." dates="August 16"/>
            </div>
            <div className="newsletter" data-aos="fade-up" data-aos-delay="300">
                <h2>Newsletter</h2>
                <div className="form-element">
                    <input type="text" className="input-element" placeholder="Email" />
                    <button className="btn form-btn">Subscribe</button>
                </div>
            </div>
            <div className="popular-tags">
                <h2>Popular Tags</h2>
                <div className="tags flex-row">
                    <span className="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                    <span className="tag" data-aos="flip-up" data-aos-delay="200">technology</span>
                    <span className="tag" data-aos="flip-up" data-aos-delay="300">travel</span>
                    <span className="tag" data-aos="flip-up" data-aos-delay="400">illustration</span>
                    <span className="tag" data-aos="flip-up" data-aos-delay="500">design</span>
                    <span className="tag" data-aos="flip-up" data-aos-delay="600">lifestyle</span>
                    <span className="tag" data-aos="flip-up" data-aos-delay="700">love</span>
                    <span className="tag" data-aos="flip-up" data-aos-delay="800">project</span>
                </div>
            </div>
        </aside>
    )

}

export default Sidebar