import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [itemCounts, setItemCounts] = useState({}); // Add state for item counts


    const addToCart = (item) => {
        setCartData([...cartData, item]);
        setCartCount(cartCount + 1); 

        setItemCounts(prevItemCounts => {
            const updatedItemCounts = { ...prevItemCounts };
            console.log(prevItemCounts,'updatedItemCounts');
            if (updatedItemCounts[item.id]) {
                updatedItemCounts[item.id] += 1;
            } else {
                updatedItemCounts[item.id] = 1;
            }
            return updatedItemCounts;
        });

        
    };

    return(
        <CartContext.Provider value={{cartData, setCartData, cartCount, addToCart, itemCounts }}>
            {children}
        </CartContext.Provider>
    )

} 

export default CartProvider