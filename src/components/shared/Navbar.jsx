import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                <RxHamburgerMenu size={"20px"}/ >
                </div>
                <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
