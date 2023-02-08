import React, { useContext } from 'react';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const CartList = (props) => {
      const cxt = useContext(CartContext);

    // const decrease = () => {
    //       cxt.items.forEach(i => i.quantity -= 1 )
    //    }
    //  const increase = () => {
    //       cxt.items.forEach(i => i.quantity += 1 ) 
    // }
   
    return (
        <li key={props.id} className={classes.list}>
            <div>Name: {props.name}</div>
            <div>Price: $ {props.price}</div>
            <div>
                <button onClick={quantityminus}>-</button>
                Quantity: {props.quantity}
                <button onClick={increase}>+</button>
            </div>
            <div>
            </div>
        </li>
    )
}

export default CartList;