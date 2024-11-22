import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FlashSaleContainer from '../components/FlashSaleContainer'
import PhoneShape from '../components/PhoneShape'

const Home = () => {
    return (
        <div className=' bg-black text-white h-screen'>
            <Navbar />
            <Banner />
            <FlashSaleContainer />
            {/* <Banner/> */}
            <PhoneShape />
        </div>
    )
}

export default Home