import React from 'react';
import { Heart, Eye } from 'lucide-react';
import PhoneShape from './PhoneShape';

const FlashSaleContainer = () => {
  const products = [
    {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      currentPrice: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 4.5,
      reviews: 88,
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      currentPrice: "$960",
      originalPrice: "$1160",
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      currentPrice: "$370",
      originalPrice: "$400",
      discount: "-30%",
      rating: 4.5,
      reviews: 99,
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      title: "S-Series Comfort Chair",
      currentPrice: "$375",
      originalPrice: "$400",
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: "/api/placeholder/300/300"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span 
        key={index}
        className={`text-xl ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-600'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-black text-white">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-8">
          <div>
            <span className="text-red-500 font-semibold"><PhoneShape/> Today's</span>
            <h2 className="text-3xl font-bold mt-2 text-white">Flash Sales</h2>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex items-center gap-4 text-xl">
            <div className="text-center">
              <div className="font-bold text-white">03</div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <span className="text-red-500">:</span>
            <div className="text-center">
              <div className="font-bold text-white">23</div>
              <div className="text-sm text-gray-400">Hours</div>
            </div>
            <span className="text-red-500">:</span>
            <div className="text-center">
              <div className="font-bold text-white">19</div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <span className="text-red-500">:</span>
            <div className="text-center">
              <div className="font-bold text-white">56</div>
              <div className="text-sm text-gray-400">Seconds</div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-900 rounded-lg p-4 relative group">
            {/* Discount Badge */}
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
              {product.discount}
            </div>
            
            {/* Wishlist and Quick View */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <button className="p-2 bg-gray-800 rounded-full shadow hover:bg-gray-700 text-white">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 bg-gray-800 rounded-full shadow hover:bg-gray-700 text-white">
                <Eye className="w-5 h-5" />
              </button>
            </div>

            {/* Product Image */}
            <div className="aspect-square mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <h3 className="font-semibold mb-2 text-white">{product.title}</h3>
            <div className="flex gap-2 mb-2">
              <span className="text-red-500 font-semibold">{product.currentPrice}</span>
              <span className="text-gray-500 line-through">{product.originalPrice}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-400">({product.reviews})</span>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSaleContainer;