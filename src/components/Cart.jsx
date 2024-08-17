import React  from 'react'
import { getCart } from '../contexts/CartContext'

const Cart = () => {
  const cart = getCart();
  let a = 0;
  const total = cart.items.reduce((a, b) => a + b.price, 0)
  return (
    <div className='cart'>
        <ul>
          {cart && cart.items.map((item, index) => (<li key={item.name + index}>{index}  {item.name} ${item.price}</li>))}          
        </ul>

        <h5>Total - ${total}</h5>
    </div>
  )
}

export default Cart