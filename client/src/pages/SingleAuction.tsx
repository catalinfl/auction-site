import AuctionInfo from '@/react-components/AuctionInfo'
import BreadcrumbComp from '@/react-components/BreadcrumbComp'
import Footer from '@/react-components/Footer'
import Navbar from '@/react-components/Navbar'
import React from 'react'

const SingleAuction = () => {
  return (
    <>
        <Navbar />
        <div className="w-full max-w-7xl mx-auto">
              <BreadcrumbComp search={false} auction={"Auction name"}/>
        </div>
        <AuctionInfo />
        <Footer isHeightBigger={false} />
    </>
  )
}

export default SingleAuction