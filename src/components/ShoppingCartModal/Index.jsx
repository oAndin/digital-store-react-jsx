
import { useContext } from 'react'
import './index.css'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext/Index';

const ShoppingCartModal = () => {

    const { isCartOpen } = useContext(ShoppingCartContext);

    return (
        <>
            {isCartOpen && (
                <span id='shopping-cart-modal'>
                    <h3>Meu carrinho</h3>
                    <span id='line'></span>
                    <div></div>
                    <span id='line'></span>
                </span >
            )}
        </>
    )
}

export default ShoppingCartModal