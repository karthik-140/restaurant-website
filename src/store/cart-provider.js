import React, {useState} from 'react';

import CartContext from "./cart-context";

const CartProvider = (props) =>{
    const [items, updateItems]= useState([]);

    const addItemToCartHandler = (item) =>{  
        let itemsCopy = [...items];
        let itemIndex = itemsCopy.findIndex((i) => i.id === item.id)
        if(itemIndex === -1){
            updateItems([...items, item]);
        }else{
           itemsCopy[itemIndex].quantity++;
           itemsCopy[itemIndex].totalPrice = itemsCopy[itemIndex].quantity * itemsCopy[itemIndex].price;
           updateItems(itemsCopy);
        }
            
    }
    const removeItemFromCartHandler = (id) =>{

    }

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext} >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;


// const existingItemsIndex = items.findIndex((item) => item.id === newItem.id)
// let updatedItems;
//  if(existingItemsIndex){
//     const existingItem = items[existingItemsIndex]
    
//      const updateItem = [existingItem.quantity += 1]
//      updatedItems = {...items};
//      updatedItems[existingItemsIndex] = updateItem;
//      updateItems(updatedItems);  
//  }else{
//     updateItems([...items, newItem]);
//  }

 // addItemHandler(item) [
    //     let itemsCopy = [...items];
    //     let itemIdx = itemsCopy.findIndex((i) => i.id == item.id)
      
    //     if (itemIdx == -1)
    //       setCartItems([...items, item]);
    //      else {
    //        itemsCopy[itemIdx].quantity++;
    //        setCartItems(itemsCopy);
    //      }
    //   ]