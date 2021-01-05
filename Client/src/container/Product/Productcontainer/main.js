import React from 'react'
import Productcard from '../Productcard/main'

/**
* @author
* @function Productcontainer
**/

const Productcontainer = (props) => {
  return(
    <>
        <section class="products">
        <div class="container">
            <h3 class="center product-heading">Some Of Our Best Products</h3>
            <div class="row">
                <Productcard 
                heading="Green Tea" 
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, totam. Tempore amet doloribus
                            molestias consequuntur cupiditate officia ipsa, quae consequatur ab incidunt."
                />
                <Productcard 
                heading="Green Pumpkins" 
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, totam. Tempore amet doloribus
                            molestias consequuntur cupiditate officia ipsa, quae consequatur ab incidunt."
                />
                <Productcard 
                heading="Fresh Carrots" 
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, totam. Tempore amet doloribus
                            molestias consequuntur cupiditate officia ipsa, quae consequatur ab incidunt."
                />
            </div>
            <div class="row">
            <Productcard 
                heading="Green Tea" 
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, totam. Tempore amet doloribus
                            molestias consequuntur cupiditate officia ipsa, quae consequatur ab incidunt."
                />
                <Productcard 
                heading="Green Pumpkins" 
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, totam. Tempore amet doloribus
                            molestias consequuntur cupiditate officia ipsa, quae consequatur ab incidunt."
                />
                <Productcard 
                heading="Fresh Tomatos" 
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, totam. Tempore amet doloribus
                            molestias consequuntur cupiditate officia ipsa, quae consequatur ab incidunt."
                />
            </div>
        </div>
    </section>
    </>
   )

 }

export default Productcontainer