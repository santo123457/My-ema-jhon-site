import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Products = (props) => {
    console.log(props)
    const { img, name, seller, price, stock } = props.products
    return (
        <div className="products">

            <div class="product-name">
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{name}</h4>

                <h6>by{seller}</h6>
                <br />
                <p className="product-price">${price};</p>
                <h5>only{stock} left in stock</h5>
                <button onClick={() => props.handleApp(props.products) } className="cart-btn"> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>

            </div>


        </div>
    );
};

export default Products;