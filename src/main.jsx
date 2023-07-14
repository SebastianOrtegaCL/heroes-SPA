import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';

import { DcPage, MarvelPage, Search, Hero } from './heroes';

import { LoginPage } from './auth/pages/LoginPage';
import { ErrorPage } from './ErrorPage';
import { Root } from './routes/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
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
        path: 'search',
        element: <Search />
      },
      {
        path: 'hero/:id',
        element: <Hero />
      }
    ]

  },
  {
    path: 'login',
    element: <LoginPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
     {/* <HeroesApp /> */}
  </React.StrictMode>
)
