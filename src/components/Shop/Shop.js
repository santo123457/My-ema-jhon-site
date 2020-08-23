import React, { useState } from 'react';
import fakeData from "../../fakeData"
import "./Shop.css"
import Products from '../Products/Products';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const[cart,addCart]=useState([]);

    const addProduct = (product) => {
        const addNewCart = [...cart ,product];
        addCart(addNewCart);
    }

    return (

        <div className="container">
            <div className="product-container">

                {
                    products.map(product => <Products
                        handleApp={addProduct}
                        products={product}>

                    </Products>)
                }


            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
            <h3>Item Ordered: {cart.length}</h3>

            </div>
        </div>
    );
};

export default Shop;