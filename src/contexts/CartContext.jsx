import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const getCart = () => {
    const cart = useContext(CartContext);
    return cart;
}

export const CartContextProvider = (props) => {

    const [items, setItems] = useState([]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    )
}