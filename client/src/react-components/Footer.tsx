import React from 'react'

interface FooterProps {
    isHeightBigger: boolean
}

const Footer = ({ isHeightBigger }: FooterProps) => {

    if (!isHeightBigger) {
        return (
            <div className="flex mt-4 fixed justify-center w-full items-center bg-primary text-white h-12">
                <p> &copy; 2024 Catalin Flintasu. All rights reserved. </p>
            </div>
        )
    }
    else {
        return (
            <div className="flex justify-center fixed bottom-0 mt-12 w-full items-center bg-primary text-white h-12">
                <p> &copy; 2024 Catalin Flintasu. All rights reserved. </p>
            </div>
        )
    }
}

export default Footer