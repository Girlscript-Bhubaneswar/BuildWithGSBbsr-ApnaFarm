import React from 'react'
import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'



const Sell = (props) => {
    return (
        <>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <section class="testimonial py-5" id="testimonial">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-4 py-5 bg-success text-white text-center ">
                            <div class=" ">
                                <div class="card-body">
                                    <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" />
                                    <h2 class="py-3">Product Description</h2>
                                    <p class="text-white">Product description helps us to register your product and make it reach to the targeted audience.

</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8 py-5 border">
                            <h4 class="pb-4">Please fill up the details </h4>
                            <p class="text-primary">(**All fields are mandatory)</p>
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input id="Name" name="Product Name" placeholder="Product Name" class="form-control" type="text" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input id="Name" name="Product Quantity" placeholder="Product Quantity" class="form-control" type="text" />
                                    </div>

                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input id="Name" name="Number" placeholder="Registration number" class="form-control" required="required" type="text" />
                                    </div>
                                    <div class="form-group col-md-6">

                                        <select id="inputState" class="form-control">
                                            <option selected>Choose Category...</option>
                                            <option> Raw Materials</option>
                                            <option> Processed Items</option>
                                            <option> Kharif Crops</option>
                                            <option> Rabi Crops</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <select id="inputState" class="form-control">
                                            <option selected>Price Range...</option>
                                            <option> Below 200</option>
                                            <option> Below 500</option>
                                            <option> Below 800</option>
                                            <option> Below 1000</option>
                                            <option> Below 1500</option>
                                            <option> Below 2000</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">

                                        <select id="inputState" class="form-control">
                                            <option selected>Targeted Area</option>
                                            <option> My District only</option>
                                            <option> My State only</option>
                                            <option> Whole India</option>
                                            <option> Out of India</option>
                                        </select>
                                    </div>

                            
                                    <div class="form-row">

                                        <div class="form-group col-md-12">
                                            <div class="form-group">
                                                <h5>Upload your Images</h5>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-3 control-label" for="filebutton">Image1</label>
                                                <div class="col-md-4">
                                                    <input name="filebutton" class="input-file" id="filebutton" type="file" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="filebutton">Image2</label>
                                                <div class="col-md-4">
                                                    <input name="filebutton" class="input-file" id="filebutton" type="file" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="filebutton">Image3</label>
                                                <div class="col-md-4">
                                                    <input name="filebutton" class="input-file" id="filebutton" type="file" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label class="col-md-4 control-label" for="filebutton">Image4</label>
                                                <div class="col-md-4">
                                                    <input name="filebutton" class="input-file" id="filebutton" type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group col-md-12">
                                        <p>Write your product description</p>
                                        <textarea id="comment" name="comment" cols="40" rows="5" class="form-control"></textarea>
                                    </div>

                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <div class="form-group">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                                <label class="form-check-label" for="invalidCheck2">
                                                    <small>By clicking Submit, you agree to our Terms & Conditions and Privacy Policy.</small>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="form-row">
                                    <button type="button" class="btn btn-danger">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}

export default Sell