import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './components/dashboard.jsx'
import Dataset from './assets/data_rev2.json'
import Login from './components/login.jsx'
import Main from './components/display.jsx'
import ProdInfo from './components/prodinfo.jsx'
import Cart from './components/cart.jsx'
import Wishlist from './components/wishlist.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children:[
      {
        path:'',
        element: <Dashboard />
      },
      {
        path:'sign',
        element: <Login></Login>
      },
      {
        path:'main',
        element:<Main Dataset={Dataset}></Main>
      },{
        path:'product/:objectID',
        element:<ProdInfo productData={Dataset}></ProdInfo>
      },{
        path:'cart',
        element:<Cart productData={Dataset}></Cart>
      },{
        path:'wishlist',
        element:<Wishlist></Wishlist>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
