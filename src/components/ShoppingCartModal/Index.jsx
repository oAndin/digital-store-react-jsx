
import { useContext, useEffect, useState } from 'react'
import './index.css'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext/Index';

const ShoppingCartModal = () => {

    const { isCartOpen } = useContext(ShoppingCartContext);
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
        <>
            {isCartOpen && (
                <span id='shopping-cart-modal'>
                    <h3>Meu carrinho</h3>
                    <span id='line'></span>
                    {itensCarrinho.map((itemCarrinho) => (
                        <div key={itemCarrinho.id}>
                            <h1>{itemCarrinho.name}</h1>
                            <h1>{itemCarrinho.preco}</h1>
                            <img src={itemCarrinho.img} alt="imagem do produto" />
                        </div>
                    ))}
                    <span id='line'></span>
                </span >
            )}
        </>
    )
}

export default ShoppingCartModal