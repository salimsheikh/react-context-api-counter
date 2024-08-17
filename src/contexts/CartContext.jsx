import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const getCart = () => {
    const cart = useContext(CartContext);
    return cart;
}

export const CartContextProvider = (props) => {

    const [items, setItems] = useState([]);

    const [favoriteItems, setFavoriteItems] = useState([])

    return (
        <CartContext.Provider value={{ items, setItems, favoriteItems, setFavoriteItems }}>
            {props.children}
        </CartContext.Provider>
    )
}