
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/Index';

const Header = () => {
    const {isLogged, setIsLogged} = useContext(AuthContext);
    return (
        <>
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/produtos'>Produtos</Link>
                    <Link to='/categorias'>Categorias</Link>
                    { isLogged ? (
                        <Link to='/meus-pedidos'>Meus pedidos</Link>

                    ) : ''}
                </nav>
                <button onClick={() => setIsLogged(!isLogged)}>Logar</button>
            </div>
        </>
    )
}

export default Header