import React from 'react';

const ReviewItem = (props) => {
    const reviewCart ={
        marginLeft :"200px",
    };
    
    const{name,quantity,key} = props.product;
    return (
        
        <div style={reviewCart}>
            
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <br/>
            <button onClick={()=>props.removeCart(key)} className="cart-btn" >
                Remove
            </button>
        </div>
    );
};

export default ReviewItem;