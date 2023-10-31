import { Outlet } from 'react-router-dom';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext/Index';

const App = () => {
  const {isLogged, toggleIsLogged} = useContext(AuthContext);
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default App