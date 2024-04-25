import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sign from './pages/Sign.tsx'
import Auctions from './pages/Auctions.tsx'
import ThemeWrapper from './utils/themewrapper.tsx'
import Home from './pages/Home.tsx'
import AuctionSearch from './pages/AuctionSearch.tsx'
import SingleAuction from './pages/SingleAuction.tsx'

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
  },
  {
    path: '/auctions/search',
    element: <AuctionSearch />
  },
  {
    path: '/auction/:id',
    element: <SingleAuction />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeWrapper>
      <RouterProvider router={router} />
    </ThemeWrapper>
  </React.StrictMode>,
)
