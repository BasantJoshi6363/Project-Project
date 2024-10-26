import React from 'react'
import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const navItems = ["Home","Contact","About","SignUp"];
  return (
    <nav className=' px-[10vw]  p-6 flex justify-between items-center border-b-2'>
      <div className="logo">
        <Link className='text-2xl font-bold' to="/">Exclusive</Link>
      </div>
      {navItems.map((val,i)=>{
        return <div key={i}>
          <Link className='nav-items flex gap-12 text-[1.3vw] font-semibold' to={`/${val.toLowerCase()}`}>{val}</Link>
        </div>
      })}
      
      <div className="right-bar flex gap-8">
        <div className="flex items-center bg-gray-100  px-4 py-2 w-64">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 outline-none text-gray-500 w-full"
          />
          <IoSearchOutline className='text-3xl' />
        </div>
        <div className="icons flex items-center gap-5 text-5xl">
          <CiShoppingCart />
          <CiHeart />
        </div>
      </div>
    </nav>
  )
}

export default Navbar