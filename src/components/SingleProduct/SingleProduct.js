import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Products/Products';

const SingleProduct = () => {

    const{Key}=useParams();
    const products = fakeData.find(product =>product.key ===Key);
    return (
       
        <div>
            <h1>Details of {Key} </h1>
            <Products   products={products}
                        ShowAddToCart={false}
            ></Products>
        </div>
    );
};

export default SingleProduct;