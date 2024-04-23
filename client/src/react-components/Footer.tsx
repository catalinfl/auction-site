import React from 'react'

interface FooterProps {
    isHeightBigger: boolean
}

const Footer = ({ isHeightBigger }: FooterProps) => {

    if (!isHeightBigger) {
        return (
            <div className="flex justify-center w-full items-center bg-primary text-white h-12">
                <p> &copy; 2024 Catalin Flintasu. All rights reserved. </p>
            </div>
        )
    }
    else {
        return (
            <div className="flex justify-center absolute bottom-0 w-full items-center bg-primary text-white h-12">
                <p> &copy; 2024 Catalin Flintasu. All rights reserved. </p>
            </div>
        )
    }
}

export default Footer