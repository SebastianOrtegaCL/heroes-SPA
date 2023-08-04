import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';

import { DcPage, MarvelPage, Search, Hero } from './heroes';

import { LoginPage } from './auth/pages/LoginPage';
import { ErrorPage } from './ErrorPage';
import { Root } from './routes/Root';
import { AuthProvider } from './auth';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute> 
                <Root/>
            </PrivateRoute>,
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
    element: 
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router = {router}/>
    </AuthProvider>
     {/* <HeroesApp /> */}
  </React.StrictMode>
)
