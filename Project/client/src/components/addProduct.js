import React, {useState,Component} from 'react'
import './form.css'
import axios from 'axios';


//const AddSupplier = () => {
export default class addProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: [],
            name: '',
            category: '',
            price: '',
            quantity: '',
            capacity: '',
            material: '',
            percentage:'',
            country:'',
            description:'',
            image:''
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, category, price, quantity, capacity, material,percentage,country,description,image } = this.state;

        const data = {
            name: name,
            category: category,
            price: price,
            quantity: quantity,
            capacity: capacity,
            material: material,
            percentage: percentage,
            country: country,
            description: description,
            image: image

        }
        console.log(data);

        axios.post("/addProduct/post", data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                var id = res.data.success._id
                window.location.href = `/inventoryDetail`;

                this.setState(
                    {
                        name: '',
                        category: '',
                        price: '',
                        quantity: '',
                        capacity: '',
                        material: '',
                        percentage: '',
                        country: '',
                        description: '',
                        image: '',
                    }
                )
            }
        })

    }

 render(){
    return (
        <div className='container'>
            <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
            <a href="/inventory"><button className='backBtn'>Product Summary</button></a>
            <a href="/inventoryDetail"><button className='backBtn'>All Products</button></a>
            
            
            <form className="create" >
            <h3>Add New Product</h3>

            <label>Product Name: </label>
            <input type="text" name="name" value={this.state.name}
                         onChange={this.handleChange} id="formGroupExampleInput"  />
           
            <label>Category: </label>
            <input type="text" name="category" value={this.state.category}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Price(LKR): </label>
            <input type="number" name="price" value={this.state.price}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Quantity: </label>
            <input type="number" name="quantity" value={this.state.quantity}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Capacity(ml): </label>
            <input type="number" name="capacity" value={this.state.capacity}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Material: </label>
            <input type="text" name="material" value={this.state.material}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Percentage(%): </label>
            <input type="number" name="percentage" value={this.state.percentage}
                            onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Country: </label>
            <input type="text" name="country" value={this.state.country}
                            onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Description: </label>
            <textarea name="description" value={this.state.description}
                            onChange={this.handleChange} id="formGroupExampleInput"  ></textarea>

            <label>URL of the Image: </label>
            <input type="text" name="image" value={this.state.image}
                            onChange={this.handleChange} id="formGroupExampleInput"  /> 

            <center><button className='formBtn' type="submit" onClick={this.onSubmit}>Add Product</button></center>  
        </form>
        </div>
    )
}

 }