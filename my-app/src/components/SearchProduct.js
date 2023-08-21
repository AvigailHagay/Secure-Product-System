import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../style/css/SearchProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchProduct = () => {
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState([]);
    const [massage, setMassage] = useState('');

    useEffect(() => {
        axios.get('/api/product/get')
            .then((response) => {
                setProduct(response.data);
            });
    }, []);

    const searchProduct = () => {
        axios.get(`/api/product/search/${search}`)
            .then((response) => {
                setProduct(response.data);
            }).catch((error) => {
                setMassage(error.message);
            }).finally(() => {
                setSearch('');
        });
    }

    return (
        <div>
            <div className="container">
                <div className="input-group input-group-lg mb-5">
                    <input type="text" className="input-search form-control" aria-label="Large"
                           aria-describedby="inputGroup-sizing-sm"
                           placeholder="Search Product"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}>
                    </input>
                    <div className="input-group-prepend">
                        <span className="input-group-text btn" id="inputGroup-sizing-lg" onClick={searchProduct}>Search <FontAwesomeIcon icon={faSearch}/></span>
                    </div>
                </div>
                <div className="row">
                    {product.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <h5 className="card-text">{item.price}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {massage && (
                <div className={'no-product text-center mb-5'}>
                    <h4>{massage}</h4>
                </div>)}
            {product.length === 0 && !massage && (
                <div className={'no-product text-center mb-5'}>
                    <h4>No Product Found</h4>
                </div>)}
        </div>
    );
}

export default SearchProduct;