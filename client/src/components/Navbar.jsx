import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Navigation items data
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
    { path: '/signup', label: 'Sign Up' }
  ];

  // Icon buttons data
  const iconButtons = [
    { icon: Heart, ariaLabel: 'Wishlist' },
    { icon: ShoppingCart, ariaLabel: 'Shopping Cart' }
  ];

  // Search input component
  const SearchInput = ({ className = '' }) => {
    return (
      <div className={`relative w-full ${className}`}>
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
        <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
      </div>
    );
  };

  return (
    <div className="w-full">
    

      {/* Main Navigation */}
      <nav className="border-b px-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-xl font-bold">Exclusive</h1>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className="hover:text-gray-600 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <SearchInput />
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {iconButtons.map(({ icon: Icon, ariaLabel }) => (
                <button
                  key={ariaLabel}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label={ariaLabel}
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="p-2">
                  <SearchInput />
                </div>
                {navItems.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <div className="flex space-x-4 px-3 py-2">
                  {iconButtons.map(({ icon: Icon, ariaLabel }) => (
                    <button
                      key={ariaLabel}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label={ariaLabel}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;