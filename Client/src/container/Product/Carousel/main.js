import React from 'react'
// import './style.css'

/**
* @author
* @function Carousel
**/

const Carousel = (props) => {
    return (
        <>
            <main>
                <section>
                    <div class="blog">
                        <div class="container">
                            <div class="owl-carousel owl-theme blog-post">
                                <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-1.jpg" alt="post-1" />
                                    <div class="blog-title">
                                        <h3>The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.</h3>
                                        <button class="btn btn-blog">Show More</button>
                                        <span>Rs 1250/-</span>
                                    </div>
                                </div>
                                <div class="blog-content" data-aos="fade-in" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-3.jpg" alt="post-1" />
                                    <div class="blog-title">
                                        <h3>I did not become an actor to earn money - that I could have done it in my village by becoming a farmer.</h3>
                                        <button class="btn btn-blog">Show More</button>
                                        <span>Rs 990/-</span>
                                    </div>
                                </div>
                                <div class="blog-content" data-aos="fade-left" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-2.jpg" alt="post-1" />
                                    <div class="blog-title">
                                        <h3>There are only three things that can kill a farmer: lightning, rolling over in a tractor, and old age.</h3>
                                        <button class="btn btn-blog">Show More</button>
                                        <span>Rs 2990/-</span>
                                    </div>
                                </div>
                                <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                                    <img src="./assets/Blog-post/post-5.jpg" alt="post-1" />
                                    <div class="blog-title">
                                        <h3>As the Republican platforms says, the welfare of the farmer is vital to that of the whole country.</h3>
                                        <button class="btn btn-blog">Show More</button>
                                        <span>Rs 1990/-</span>
                                    </div>
                                </div>
                            </div>
                            <div class="owl-navigation">
                                <span class="owl-nav-prev"><i class="fas fa-long-arrow-alt-left"></i></span>
                                <span class="owl-nav-next"><i class="fas fa-long-arrow-alt-right"></i></span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default Carousel