import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartcntx = useContext(CartContext);

    console.log(cartcntx.items)
    const cartItems = (
        <ul className={classes['cart-name']}>
            {cartcntx.items.map((item) => (
                <li key={Math.random()} className={classes.list}>
                    <div className={classes.name}>
                        Name: {item.name}
                        </div>
                       <div className={classes.price}>Price: {item.totalPrice}</div> 
                    
                    <div className={classes.quantity}>Quantity: {item.quantity}</div>
                </li>))}
        </ul>
    );

    let totalPrice = 0;
    cartcntx.items.forEach(item => {
        totalPrice = totalPrice + Number(item.totalPrice)
    })

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalPrice}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;