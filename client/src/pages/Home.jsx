import React from 'react'
import UpperNavbar from '../components/UpperNavbar'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div className=' font-[#fefefe]'>
        <UpperNavbar />
        <Navbar />
        <div className="carouselNCategories">
          <Categories />  
        </div>
    </div>
  )
}

export default Home