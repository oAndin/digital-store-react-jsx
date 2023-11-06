
import { useContext} from 'react'
import './index.css';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext/Index';
import ItemsCart from '../ItemsCart/Index';

const ShoppingCartModal = () => {

    const { isCartOpen } = useContext(ShoppingCartContext);
    return (
        <>
            {isCartOpen && (
                <span id='shopping-cart-modal'>
                    <h3>Meu carrinho</h3>
                    <span id='line'></span>
                    <ItemsCart/>
                    <span id='line'></span>
                </span >
            )}
        </>
    )
}

export default ShoppingCartModal