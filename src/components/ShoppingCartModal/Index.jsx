
import { useContext } from 'react'
import './index.css'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext/Index';

const ShoppingCartModal = () => {

    const { isCartOpen } = useContext(ShoppingCartContext);

    return (
        <>
            {isCartOpen && (
                <span id='shopping-cart-modal'>

                </span >
            )}
        </>
    )
}

export default ShoppingCartModal