import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banner(){
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    const banners = [
        {
            id: 1,
            title: "Up to 10% off Voucher",
            subtitle: "iPhone 14 Series",
            image: "https://via.placeholder.com/800x400?text=iPhone+14", // Replace with your actual image URL
            cta: "Shop Now",
        },
        {
            id: 2,
            title: "Exclusive Deals on Tablets",
            subtitle: "New iPad Series",
            image: "https://via.placeholder.com/800x400?text=iPad+Pro", // Replace with your actual image URL
            cta: "Explore Now",
        },
        {
            id: 3,
            title: "Enhance Your Productivity",
            subtitle: "MacBook Air M2",
            image: "https://via.placeholder.com/800x400?text=MacBook+Air", // Replace with your actual image URL
            cta: "Buy Now",
        },
        {
            id: 4,
            title: "Upgrade Your Audio Experience",
            subtitle: "AirPods Pro 2",
            image: "https://via.placeholder.com/800x400?text=AirPods+Pro", // Replace with your actual image URL
            cta: "Shop Now",
        },
        {
            id: 5,
            title: "Experience the Future",
            subtitle: "Apple Watch Series 8",
            image: "pind", // Replace with your actual image URL
            cta: "Learn More",
        },
    ];

    return (
        <div className="bg-black text-white">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="relative">
                        <div
                            className="w-full h-[400px] bg-cover bg-center"
                            style={{ backgroundImage: `url(${banner.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-8 lg:px-16">
                                <p className="text-sm lg:text-lg font-medium">{banner.subtitle}</p>
                                <h1 className="text-3xl lg:text-5xl font-bold my-4">{banner.title}</h1>
                                <button className="mt-4 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition">
                                    {banner.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
