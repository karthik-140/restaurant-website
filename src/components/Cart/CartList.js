import React, { useState } from 'react';
import classes from './Cart.module.css';

const CartList = (props) => {
    let [quantity, setQuantity] = useState(props.quantity);

    const decrementHandler = () => {
       if(quantity > 0)
        setQuantity(quantity - 1);
    }
    const incrementHandler = () => {
        setQuantity(quantity + 1);
    }

    return (
        <li key={props.id} className={classes.list}>
            <div>Name: {props.name}</div>
            <div>Price: $ {props.price}</div>
            <div>
                <button onClick={decrementHandler}>-</button>
                Quantity: {quantity}
                <button onClick={incrementHandler}>+</button>
            </div>
            <div>
            </div>
        </li>
    )
}

export default CartList;