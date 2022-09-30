import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import Loader from './Loader'
import { setProducts } from '../redux/action/ProductAction';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const [isLoading, setLoading] = useState(true);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        setLoading(true)
        const response = await axios.get('https://fakestoreapi.com/products').catch((err) => {
            console.log("ERROR", err);
        })
        dispatch(setProducts(response.data));
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    console.log(products);

    return (
        <>
            <div className="ui grid container">
                {
                    isLoading ? < Loader /> : <ProductComponent />
                }

            </div>
        </>
    )
}

export default ProductListing
