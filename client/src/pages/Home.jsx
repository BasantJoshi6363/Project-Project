import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FlashSaleContainer from '../components/FlashSaleContainer'
import PhoneShape from '../components/PhoneShape'

const Home = () => {
    return (
        <div className=' bg-zinc-800 text-white h-screen'>
            <Navbar />
            <Banner />
            <FlashSaleContainer />
            <PhoneShape />
        </div>
    )
}

export default Home