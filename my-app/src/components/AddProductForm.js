import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/css/AddProductForm.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const AddProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
    });
    const [massage, setMassage] = useState([]);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/product/add', product);
            if (response.status === 200) {
                setMassage(["Product added successfully!"]);
                setProduct({
                    name: "",
                    price: "",
                });
            }
        } catch (error) {
            let massages = [];
            error.response.data.forEach((item) => {
                massages.push(item);
            });
            setMassage(massages);
        }
    };

    return (
        <div className={'add-prod mt-5'}>
            {massage.map((value, index)=>(
                <h4 className={'text-center'} key={index}>{value}</h4>
            ))}
            <div className="d-flex justify-content-center">
                <div className="container card mx-4 mb-5">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Product Name:</label>
                                    <input type="text" name="name" pattern={'^[a-zA-Z0-9]+'} minLength={3} maxLength={15} placeholder="product name" value={product.name} onChange={handleChange} required/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label>Product Price:</label>
                                    <input type="number" step={'0.1'} min="0" name="price" placeholder="product price" value={product.price} onChange={handleChange} required/>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="offset-4 col-4">
                                <button type="submit" className="btn">Add Product <FontAwesomeIcon icon={faPlus}/></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductForm;
