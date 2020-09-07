import React from 'react';

const Cart = (props) => {
  
   const cart = props.cart;
    const totalPrice= cart.reduce((total,pd)=>total+pd.price,0);
    console.log(cart)
    const tax = totalPrice/10;
    let Shipping = 0;
if(totalPrice>35){
    Shipping = 0;
}
else if(totalPrice>15){
    Shipping=4.99;
}
else if(totalPrice>0){
    Shipping=12.99;
}
const formatNumber = num =>{
    const preSizing = num.toFixed(2);
    return Number(preSizing);
}
    return (

        <div className="cart-container">
        <h1>Order Summary</h1>
    <h3>Item Ordered: {cart.length}</h3>
    <h3>Product Price: {formatNumber(totalPrice *cart.quantity)}</h3>
    <h3>Shipping Cost: {formatNumber(Shipping)}</h3>
    <h3>Tex + Vat: {formatNumber(tax)}</h3>
    <h3>Total Price{formatNumber(totalPrice +Shipping+tax )}</h3>

    </div>
    );
};

export default Cart;