import React from 'react'
import frame from "../assets/img/frame.jpg"
const Banner = () => {
    const categories = [
        "Woman's Fashion",
        "Men's Fashion",
        'Electronics',
        'Home & Lifestyle',
        'Medicine',
        'Sports & Outdoor',
        "Baby's & Toys",
        'Groceries & Pets',
        'Health & Beauty',
    ];

    return (
        <div className='px-10 border-r flex flex-row whitespace-nowrap'>
            {/* Sidebar */}
            <div className="parent w-[20%] border-r">
                <ul className="w-1/4 p-4">
                    {categories.map((category, index) => (
                        <li key={index} className="py-2 text-white hover:text-black cursor-pointer">
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="carouselContainer">
               <img src={frame} alt="" />
            </div>
        </div>
    )
}

export default Banner