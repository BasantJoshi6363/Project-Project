import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
const UpperNavbar = () => {
    return (
        <div className='px-0 w-full min-h-20 bg-black text-center text-white flex items-center justify-evenly pl-[12vw] gap-[14vw]'>
            <div className="left flex justify-center items-center gap-3">
                <p className=' capitalize text-center'>Summer sale for all swim suit and free express delivery - OFF 50% !</p>
                <h5 className='font-bold text-center'>ShopNow</h5>

            </div>
            <div className="right">
                <a className='flex justify-center items-center gap-2 text-[18px]'>English <FaAngleDown /></a>
            </div>
        </div>
    )
}

export default UpperNavbar