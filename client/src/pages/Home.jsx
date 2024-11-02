import React from 'react'
import UpperNavbar from '../components/UpperNavbar'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className=' font-[#fefefe]'>
        <UpperNavbar />
        <Navbar />
        <div className="carouselNCategories flex">
          <Categories />  
          <Slider />
        </div>
    </div>
  )
}

export default Home