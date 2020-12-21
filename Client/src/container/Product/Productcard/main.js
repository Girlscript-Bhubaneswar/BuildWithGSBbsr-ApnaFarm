import React from 'react'

/**
* @author
* @function Productcard
**/

const Productcard = (props) => {
    return (
        <>
            <div class="col">
                <img src="./assets/Blog-post/product-1.jpg" alt="img" />
                <div class="product-content">
                    <h3 class="center">{props.heading}</h3>
                    <p>{props.info}</p>
                    <button class="btn product-btn">Visit</button>
                </div>
            </div>
        </>
    )

}

export default Productcard