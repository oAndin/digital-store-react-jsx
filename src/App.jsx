import { Outlet } from 'react-router-dom';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import { AuthContext } from './contexts/AuthContext/Index';
import { useState } from 'react';

const App = () => {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{isLogged, setIsLogged}}>
        <Header />
        <Outlet />
        <Footer />
      </AuthContext.Provider>
    </>
  )
}

export default App