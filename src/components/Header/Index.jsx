import './index.css'
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'boxicons';
import logo from './assets/logo.png'
import ShoppingCartModal from '../ShoppingCartModal/Index';
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext/Index';

const Header = () => {
    const { isCartOpen, setIsCartOpen } = useContext(ShoppingCartContext);

    return (
        <>
            <header>
                <div className="logo"><img src={logo} alt="Digital Store" /></div>
                <div className="busca"><input type="text" placeholder='Pesquisar produto...' />
                    <box-icon name='search'></box-icon>
                </div>
                <div className="acoes">
                    <Link to={'/cadastro'} className='underline'>Cadastre-se</Link>
                    <Link to={'/login'} className='filled'>Entrar</Link>
                    <box-icon name='cart'
                        items='0'
                        id='cart'
                        onClick={() => {
                            setIsCartOpen(!isCartOpen)
                        }} ></box-icon>
                    {isCartOpen && (
                        <ShoppingCartModal>

                        </ShoppingCartModal>
                    )}
                </div>
                <nav>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/categorias'>Categorias</Link>
                        {/* {isLogged ? (
                            <Link to='/meus-pedidos'>Meus pedidos</Link>
                        ) : ''} */}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header