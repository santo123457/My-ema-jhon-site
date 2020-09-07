import React, { useState } from 'react';
import fakeData from "../../fakeData"
import "./Shop.css"
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import {addToDatabaseCart} from"../../utilities/databaseManager"
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const[cart,addCart]=useState([]);
    

    const addProduct = (product) => {
            const toBeAddedKey =product.key;
            const sameProduct= cart.find(pd => pd.key === toBeAddedKey);
            let count = 1;
            let newCart;
            if(sameProduct){
                count =sameProduct.quantity + 1;
                sameProduct.quantity = count;
                const Other = cart.filter(pd => pd.key !==toBeAddedKey);
                newCart =[...Other,sameProduct];
            }
            else{
                product.quantity =1;
                 newCart = [...cart ,product];
            }

        
        addCart(newCart);
       
        addToDatabaseCart(product.key, count);
        
    }

    return (

        <div className="container">
            <div className="product-container">

                {
                    products.map(product => <Products
                        key = {product.key}
                        ShowAddToCart={true}
                        handleApp={addProduct}
                        products={product}
                        >

                    </Products>)
                }


            </div>
           <Cart cart={cart}> </Cart>
        </div>
    );
};

export default Shop;