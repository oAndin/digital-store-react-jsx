
import { useContext } from 'react'
import './index.css';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext/Index';
import ItemsCart from '../ItemsCart/Index';

const ShoppingCartModal = () => {

    const { isCartOpen } = useContext(ShoppingCartContext);
    
    return (
        <>
            {isCartOpen && (
                <span id='shopping-cart-modal'
                className={isCartOpen && `active`}>
                    <h3>Meu carrinho</h3>
                    <span id='line'></span>
                    <div id='carrinho'>
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                        <ItemsCart />
                    </div>
                    <span id='line'></span>
                    <span id='checkout'>
                        <div id='lado-lado'>
                            <h3 id='total-title'>Valor total:</h3>
                            <h3 id='total-price'>R$ 00.00</h3>
                        </div>
                        <div id='lado-lado'>
                            <button id='btn-esvaziar'><p>Esvaziar</p></button>
                            <button id='btn-carrinho'>Ver carrinho</button>
                        </div>
                    </span>
                </span >
            )}
        </>
    )
}

export default ShoppingCartModal