import React, { useState } from 'react'
import Header from './component/header/Header'
import "./app.css"
import Home from './pages/main/Home'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import Search from './pages/search/Search';
import ViewRestaurant from './pages/viewrestaurant/ViewRestaurant';
import { CommonStateProvider } from './contextandreducer/restolinkcontext';
import Sidebar from './component/sidebar/Sidebar';
import Cart from './pages/cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Sidebar/>
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/search",
        element: <Search/>
      },
      {
        path: "/restaurants/:id",
        element: <ViewRestaurant/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <CommonStateProvider>
      <RouterProvider router={router}/>
      </CommonStateProvider>
    </div>
  )
}

export default App

