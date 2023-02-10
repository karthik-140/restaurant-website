import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const CartList = (props) => {
  const cxt = useContext(CartContext);

  // const decrease = () => {
  //       cxt.items.forEach(i => i.quantity -= 1 )
  //    }
  //  const increase = () => {
  //       cxt.items.forEach(i => i.quantity += 1 )
  // }

  return (
    <li key={props.id} className={classes['cart-list']}>
      <div>{props.name}</div>
      <div className={classes.price}> $ {props.price}</div>
      <div className={classes.quantity}>
        <button onClick={() => cxt.quantityminus(props)}>-</button>
        {props.quantity}
        <button onClick={() => cxt.quantityplus(props)}>+</button>
      </div>
      <div></div>
    </li>
  );
};

export default CartList;
