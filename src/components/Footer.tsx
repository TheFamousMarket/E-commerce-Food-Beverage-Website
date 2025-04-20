import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-red-600 mb-4">THEFMSMKT</h3>
            <p className="text-gray-600 mb-4">
              Your hub for delicious food & drinks. Quality products with a
              community focus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-red-600">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              NAVIGATION
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-red-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-red-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-600 hover:text-red-600">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-red-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              PRODUCTS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/menu" className="text-gray-600 hover:text-red-600">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-600 hover:text-red-600">
                  Beverages
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-600 hover:text-red-600">
                  Preserved Fruits
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-600 hover:text-red-600">
                  Signature Items
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@thefmsmkt.com</li>
              <li className="text-gray-600">Phone: +123 456 7890</li>
              <li className="text-gray-600">CMNTYPLX Space</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} THEFMSMKT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;