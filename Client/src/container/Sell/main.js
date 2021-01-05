import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import './style.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Sell extends React.Component{
constructor(props){
    super(props);
    this.state ={
        ProductName         :"",
        ProductQuantity     :"",
        RegistrationNumber  :"",
        Category            :"",
        Price               :"",
        Area                :"",
        filebutton1         :"",
        filebutton2         :"",
        filebutton3         :"",
        filebutton4         :"",
        comment             :"",
        checkbox            :false,
        ProductNameError    :false,
        ProductQuantityError:false,
        RegistrationNumberError:false,
        CategoryError       :false,
        PriceError          :false,
        AreaError           :false,
        filebutton1Error    :false,
        filebutton2Error    :false,
        filebutton3Error    :false,
        filebutton4Error    :false,
        commentError        :false,
        checkboxError       : false 
    }
    this.validateForm = this.validateForm.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
}

validateForm(){
    const  ProductName         =this.state.ProductName;
    const  ProductQuantity     =this.state.ProductQuantity;
    const  RegistrationNumber  =this.state.RegistrationNumber;
    const  Category            =this.state.Category;
    const  Price               =this.state.Price;
    const  Area                =this.state.Area;
    const  filebutton1         =this.state.filebutton1;
    const  filebutton2         =this.state.filebutton2;
    const  filebutton3         =this.state.filebutton3;
    const  filebutton4         =this.state.filebutton4;
    const  comment             =this.state.comment;
    const  checkbox            =this.state.checkbox;
    var  valid               = 0; 
    if (ProductName){
        this.setState({ProductNameError : false})
        valid += 1
    } else {
        this.setState({ProductNameError : true})
    }
    if (ProductQuantity){
        this.setState({ProductQuantityError : false})
        valid += 1
    } else {
        this.setState({ProductQuantityError : true})
    }
    if (RegistrationNumber){
        this.setState({RegistrationNumberError : false})
        valid += 1
    } else {
        this.setState({RegistrationNumberError : true})
    }
    if (Category !='Choose Category...' && Category !=''){
        this.setState({CategoryError : false})
        valid += 1
    } else {
        this.setState({CategoryError : true})
    }
    if (Price !='Price Range...' && Price !=''){
        this.setState({PriceError : false})
        valid += 1
    } else {
        this.setState({PriceError : true})
    }
    if (Area !='Targeted Area' && Area !=''){
        this.setState({AreaError : false})
        valid += 1
    } else {
        this.setState({AreaError : true})
    }
    if (filebutton1){
        this.setState({filebutton1Error : false})
        valid += 1
    } else {
        this.setState({filebutton1Error : true})
    }
    if (filebutton2){
        this.setState({filebutton2Error : false})
        valid += 1
    } else {
        this.setState({filebutton2Error : true})
    }
    if (filebutton3){
        this.setState({filebutton3Error : false})
        valid += 1
    } else {
        this.setState({filebutton3Error : true})
    }
    if (filebutton4){
        this.setState({filebutton4Error : false})
        valid += 1
    } else {
        this.setState({filebutton4Error : true})
    }
    if (comment){
        this.setState({commentError : false})
        valid += 1
    } else {
        this.setState({commentError : true})
    }
    if (checkbox){
        this.setState({checkboxError : false})
        valid += 1
    } else {
        this.setState({checkboxError : true})
    }

    console.log(valid)
    var sellFormData = {
        ProductName         : ProductName,
        ProductQuantity     : ProductQuantity,
        RegistrationNumber  : RegistrationNumber,
        Category            : Category,
        Price               : Price,
        Area                : Area,
        filebutton1         : filebutton1,
        filebutton2         : filebutton2,
        filebutton3         : filebutton3,
        filebutton4         : filebutton4,
        comment             : comment
    }
    if (valid == 12){
        console.log(sellFormData)
        axios.post('http://localhost:3001/sellform', sellFormData)
            .then(function (response) {
                Swal.fire('Success...', 'Data has been submitted!', 'success')
            })
            .catch(function (error) {
                console.log(error);
                Swal.fire('Oops...', 'Something went wrong!', 'error')
            });
    }
    
}

onChangeInput(event){
 const name = event.target.name;
 const value = event.target.value;
 this.setState({[name] : value})
}
onChangeCheckbox(event){
 const name = event.target.name;
 this.setState({[name] : !this.state.checkbox})
}

render() {
    return (
        <>
            <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
            <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <section className="testimonial py-5" id="testimonial">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 py-5 bg-success text-white text-center ">
                            <div className=" ">
                                <div className="card-body">
                                    <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" />
                                    <h2 className="py-3">Product Description</h2>
                                    <p className="text-white">Product description helps us to register your product and make it reach to the targeted audience.

</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 py-5 border">
                            <h4 className="pb-4">Please fill up the details </h4>
                            <p className="text-primary">(**All fields are mandatory)</p>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input id="ProductName"  style={{border: (this.state.ProductNameError)?'1px solid red':''}} value={this.state.ProductName} name="ProductName" placeholder="Product Name" className="form-control" type="text" onChange={(e)=>this.onChangeInput(e)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input id="ProductQuantity" style={{border: (this.state.ProductQuantityError)?'1px solid red':''}} value={this.state.ProductQuantity} name="ProductQuantity" placeholder="Product Quantity" className="form-control" type="text" onChange={(e)=>this.onChangeInput(e)} />
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input id="RegistrationNumber" style={{border: (this.state.RegistrationNumberError)?'1px solid red':''}} value={this.state.RegistrationNumber} name="RegistrationNumber" placeholder="Registration number" className="form-control" required="required" type="text" onChange={(e)=>this.onChangeInput(e)}/>
                                    </div>
                                    <div className="form-group col-md-6">

                                        <select id="Category" value={this.state.Category} style={{border: (this.state.CategoryError)?'1px solid red':''}} name="Category" className="form-control" onChange={(e)=>this.onChangeInput(e)}>
                                            <option selected>Choose Category...</option>
                                            <option> Raw Materials</option>
                                            <option> Processed Items</option>
                                            <option> Kharif Crops</option>
                                            <option> Rabi Crops</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <select id="Price" name="Price" value={this.state.Price} style={{border: (this.state.PriceError)?'1px solid red':''}} className="form-control" onChange={(e)=>this.onChangeInput(e)}>
                                            <option selected>Price Range...</option>
                                            <option> Below 200</option>
                                            <option> Below 500</option>
                                            <option> Below 800</option>
                                            <option> Below 1000</option>
                                            <option> Below 1500</option>
                                            <option> Below 2000</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">

                                        <select id="Area" value={this.state.Area} name="Area" style={{border: (this.state.AreaError)?'1px solid red':''}} className="form-control" onChange={(e)=>this.onChangeInput(e)}>
                                            <option selected>Targeted Area</option>
                                            <option> My District only</option>
                                            <option> My State only</option>
                                            <option> Whole India</option>
                                            <option> Out of India</option>
                                        </select>
                                    </div>

                            
                                    <div className="form-row">

                                        <div className="form-group col-md-12">
                                            <div className="form-group">
                                                <h5>Upload your Images</h5>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-3 control-label" for="filebutton">Image1</label>
                                                <div className="col-md-4">
                                                    <input name="filebutton1" style={{border: (this.state.filebutton1Error)?'1px solid red':''}} value={this.state.filebutton1} className="input-file" id="filebutton1" type="file" onChange={(e)=>this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label" for="filebutton">Image2</label>
                                                <div className="col-md-4">
                                                    <input name="filebutton2" style={{border: (this.state.filebutton2Error)?'1px solid red':''}} value={this.state.filebutton2} className="input-file" id="filebutton2" type="file" onChange={(e)=>this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label" for="filebutton">Image3</label>
                                                <div className="col-md-4">
                                                    <input name="filebutton3" style={{border: (this.state.filebutton3Error)?'1px solid red':''}} value={this.state.filebutton3} className="input-file" id="filebutton3" type="file" onChange={(e)=>this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-4 control-label" for="filebutton">Image4</label>
                                                <div className="col-md-4">
                                                    <input name="filebutton4" style={{border: (this.state.filebutton4Error)?'1px solid red':''}} value={this.state.filebutton4} className="input-file" id="filebutton4" type="file" onChange={(e)=>this.onChangeInput(e)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="form-group col-md-12">
                                        <p>Write your product description</p>
                                        <textarea id="comment" name="comment" style={{border: (this.state.commentError)?'1px solid red':''}}  value={this.state.comment} cols="40" rows="5" className="form-control" onChange={(e)=>this.onChangeInput(e)}></textarea>
                                    </div>

                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <div className="form-check">
                                                <input className= "form-check-input" defaultChecked={this.state.checkbox} type="checkbox" name="checkbox" id="invalidCheck2" onChange={(e)=>this.onChangeCheckbox(e)} required />
                                                <label className="form-check-label" style={{color: (this.state.checkboxError)?'red':''}} for="invalidCheck2">
                                                    By clicking Submit, you agree to our Terms & Conditions and Privacy Policy.
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="form-row">
                                    <button type="button" className="btn btn-danger" onClick={this.validateForm}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}
}
export default Sell;