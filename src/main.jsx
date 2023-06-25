import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MarvelPage } from './heroes/pages/MarvelPage';
import { DcPage } from './heroes/pages/DcPage';
import { LoginPage } from './auth/pages/LoginPage';
import { HeroesApp } from './routes/HeroesApp';
import { ErrorPage } from './ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroesApp />,
    errorElement: <ErrorPage /> ,
    children: [
      {
        path: 'dc',
        element: <DcPage />,
      },
      {
        path: 'marvel',
        element: <MarvelPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      }
      
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
     {/* <HeroesApp /> */}
  </React.StrictMode>
)
