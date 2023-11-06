import { createContext, useEffect, useState } from "react";

export const ItemsCartContext = createContext();

export const ItemsCartProvider = ({children}) => {
    const [itensCarrinho, setItensCarrinhos] = useState([]);
    useEffect(() => {

        fetch("http://localhost:5000/itensCarrinho", {
            method: "GET",
            headers: {
                "Content-type": "application-json"
            }
        }).then((response) => response.json())
            .then((data) => {
                setItensCarrinhos(data)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <ItemsCartContext.Provider>
            {children}
        </ItemsCartContext.Provider>
    )
}