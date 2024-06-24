import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import { MaterialRegister } from './routes/MaterialRegister.jsx'
import { ErrorPage } from './routes/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/materiais/adicionar',
    element: <MaterialRegister/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  ,
)
