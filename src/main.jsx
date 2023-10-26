import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,RouterProvider, } from 'react-router-dom';
import Error from './routes/Error/Index.jsx';
import Home from './routes/Home/Index.jsx'
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext/Index.jsx';
import MeusPedidos from './routes/MeusPedidos/Index.jsx';

const {isLogged} = useContext(AuthContext);

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/meus-pedidos',
        element:<MeusPedidos/>
      },
    ],
    errorElement:<Error/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
