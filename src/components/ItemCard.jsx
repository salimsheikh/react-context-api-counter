import React from 'react'
import {getCart } from '../contexts/CartContext'

const ItemCard = ({name, price}) => {

    const cart = getCart();

    console.log("Cart", cart);
  return (
    <div className='item-card'>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <button onClick={() => cart.setItems([...cart.items, {name: name, price: price}])}>Add To Card</button>
    </div>
  )
}

export default ItemCard