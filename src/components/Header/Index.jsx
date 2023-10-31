import './index.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/Index';
import 'boxicons';
import logo from './assets/logo.png'

const Header = () => {

    const { isLogged } = useContext(AuthContext);
    // const { isLogged } = useContext(AuthContext);
    // const { toggleIsLogged } = useContext(AuthContext);


    return (
        <>
            <header>
                <div className="logo"><img src={logo} alt="Digital Store" /></div>
                <div className="busca"><input type="text" placeholder='Pesquisar produto...' />
                    <box-icon name='search'></box-icon>
                </div>
                <div className="acoes">
                    <Link to={'/cadastro'}>Cadastre-se</Link>
                    <Link to={'/login'}>Entrar</Link>
                    <box-icon name='cart'></box-icon>
                </div>
                <nav>
                    <ul>
                        <Link to='/'>Home</Link>
                        <Link to='/produtos'>Produtos</Link>
                        <Link to='/categorias'>Categorias</Link>
                        {isLogged ? (
                            <Link to='/meus-pedidos'>Meus pedidos</Link>
                        ) : ''}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header