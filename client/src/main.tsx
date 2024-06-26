import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sign from './pages/Sign.tsx'
import Auctions from './pages/Auctions.tsx'
import ThemeWrapper from './utils/themewrapper.tsx'
import Home from './pages/Home.tsx'
import AuctionSearch from './pages/AuctionSearch.tsx'
import SingleAuction from './pages/SingleAuction.tsx'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Profile from './pages/Profile.tsx'
import CreateAuction from './pages/CreateAuction.tsx'


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
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/create-auction',
    element: <CreateAuction />
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
      <QueryClientProvider client={new QueryClient()}>
       <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeWrapper>
  </React.StrictMode>,
)
