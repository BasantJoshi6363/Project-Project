import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FlashSaleContainer from '../components/FlashSaleContainer'
import PhoneShape from '../components/PhoneShape'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div className=' bg-black text-white h-screen overflow-x-hidden'>
            <Navbar />
            <Banner />
            <FlashSaleContainer />
            <Carousel />
            {/* <PhoneShape /> */}
        </div>
    )
}

export default Home