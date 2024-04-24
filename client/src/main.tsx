import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sign from './pages/Sign.tsx'
import Auctions from './pages/Auctions.tsx'
import ThemeWrapper from './utils/themewrapper.tsx'
import Home from './pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign',
    element: <Sign />
  },
  {
    path: '/auctions',
    element: <Auctions />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeWrapper>
      <RouterProvider router={router} />
    </ThemeWrapper>
  </React.StrictMode>,
)
