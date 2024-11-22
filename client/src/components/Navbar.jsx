import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { Heart, Search, ShoppingCart } from "lucide-react";



const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/signup" },
  ];
  const icons = [
    { name: "Heart", path: "/heart" },
    { name: "Cart", path: "/cart" },
    { name: "Search", path: "/search" },
  ]

  return (
    <header className="bg-black text-white border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-lg font-bold">Exclusive</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-gray-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4">
          <div className="searchContainer flex gap-3 border px-2 py-1 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="  md:block bg-black outline-none rounded-md text-white"
            />
            <Search />
          </div>

        <div className="icons flex gap-3">
          <Heart />
          <ShoppingCart />
        </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
