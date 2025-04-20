import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, X as CloseIcon, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { UserIcon } from 'lucide-react';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    cartItems
  } = useCart();
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const {
    user,
    logout
  } = useAuth();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/CMNTYPLX.png" alt="THEFMSMKT CMNTYPLX" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-red-600 px-3 py-2 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-red-600 px-3 py-2 font-medium">
              About
            </Link>
            <Link to="/menu" className="text-gray-900 hover:text-red-600 px-3 py-2 font-medium">
              Menu
            </Link>
            <Link to="/partners" className="text-gray-900 hover:text-red-600 px-3 py-2 font-medium">
              Partners
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-red-600 px-3 py-2 font-medium">
              Contact
            </Link>
            <Link to="/menu" className="text-gray-900 hover:text-red-600 px-3 py-2 font-medium relative">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>}
            </Link>
            {user ? <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-900 hover:text-red-600">
                  {user.photoURL ? <img src={user.photoURL} alt={user.displayName || 'User'} className="w-8 h-8 rounded-full" /> : <UserIcon className="w-6 h-6" />}
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    {user.displayName || user.email}
                  </div>
                  <button onClick={() => logout()} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Out
                  </button>
                </div>
              </div> : <Link to="/auth" className="text-gray-900 hover:text-red-600 px-3 py-2 font-medium">
                Sign In
              </Link>}
          </div>
          <div className="flex md:hidden items-center">
            <Link to="/menu" className="text-gray-900 mr-4 relative">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>}
            </Link>
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-red-600 focus:outline-none">
              {isMenuOpen ? <CloseIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/menu" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link to="/partners" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
              Partners
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-red-600" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navbar;