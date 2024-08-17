import React, { useEffect } from 'react'
import { getCart } from '../contexts/CartContext'

const ItemCard = ({ name, price }) => {
  const cart = getCart();
  const favoriteItems = cart.favoriteItems;


  let itemExist = (name) => {
    let favorite = cart.favoriteItems.find(item => item.name === name);
    favorite = favorite === undefined ? 0 : 1;
    return favorite;
  };

  let favorite = itemExist(name);

  const favoriteHandler = (name) => {
    favorite = itemExist(name);
    if (favorite === 1) {
      const temp = cart.favoriteItems.filter(item => item.name !== name);
      cart.setFavoriteItems(temp);
      favorite = 0;
    } else {
      cart.setFavoriteItems([...cart.favoriteItems, { name: name, price: price }]);
    }
  }

  return (
    <div className='item-card'>
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => cart.setItems([...cart.items, { name: name, price: price }])}>Add To Card</button>
      <button onClick={() => favoriteHandler(name)}>Favorite {favorite == 1 ? '*' : ''}</button>
    </div>
  )
}

export default ItemCard