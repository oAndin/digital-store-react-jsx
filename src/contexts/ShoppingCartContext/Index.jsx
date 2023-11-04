import { createContext, useState } from "react";


export const ShoppingCartContext = createContext();


// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    setIsCartOpen(!isCartOpen)

    return (
        <ShoppingCartContext.Provider value={{ isCartOpen, setIsCartOpen }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
