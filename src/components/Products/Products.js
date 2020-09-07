import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Products = (props) => {
    const { img, name, seller, price, stock, key } = props.products;
    return (
        <div className="products">

            <div className="product-name">
                <img src={img} alt="" />
            </div>
            <div>
                <h4>
                    <Link to={"/product/"+ key}>{name}</Link>
                </h4>

                <h6>by{seller}</h6>
                <br />
                <p className="product-price">${price};</p>
                <h5>only{stock} left in stock</h5>
                { props.ShowAddToCart && <button onClick={() => props.handleApp(props.products) } className="cart-btn"> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
}
            </div>


        </div>
    );
};

export default Products;