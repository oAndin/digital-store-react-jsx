import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import Error from './routes/Error/Index.jsx';
import Home from './routes/Home/Index.jsx'
import MeusPedidos from './routes/MeusPedidos/Index.jsx';
import { AuthProvider } from './contexts/AuthContext/Index.jsx';
import Produtos from './routes/Produtos/Index.jsx';
import Categorias from './routes/Categorias/Index.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/meus-pedidos',
        element: <MeusPedidos />
      },
      {
        path: '/produtos',
        element: <Produtos />
      },
      {
        path: '/categorias',
        element: <Categorias />
      },
    ],
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
