
import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartList from './CartList';

const Cart = (props) => {
    const cartcntx = useContext(CartContext);

    console.log(cartcntx.items)
    const cartItems = (
        <ul className={classes['cart-name']}>
            {cartcntx.items.map((item) => (
               <CartList
               key={item.id}
               name={item.name}
               price={item.price}
               quantity={item.quantity}
               />))}
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