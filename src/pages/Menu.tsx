import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ShoppingCart } from 'lucide-react';
import { Product, useCart } from '../context/CartContext';
import Button from '../components/Button';
// Sample products data
const productsData = [
// Beverages
{
  id: '1',
  name: 'Susu Cincau',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  description: 'A refreshing milk drink with grass jelly, perfect for hot days.',
  category: 'beverages'
}, {
  id: '2',
  name: 'Bukocha',
  price: 5.99,
  image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: 'Our signature tea blend with unique aromatic flavors.',
  category: 'beverages'
}, {
  id: '3',
  name: 'Signature Masala Chai',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: 'Our take on the classic masala chai with a special blend of spices.',
  category: 'beverages'
}, {
  id: '4',
  name: 'Iced Matcha Latte',
  price: 5.49,
  image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  description: 'Premium matcha powder whisked with milk and served over ice.',
  category: 'beverages'
},
// Desserts
{
  id: '5',
  name: 'Coconut Pandan Cake',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
  description: 'Light and fluffy cake infused with pandan extract and topped with coconut cream.',
  category: 'desserts'
}, {
  id: '6',
  name: 'Mango Sticky Rice',
  price: 7.99,
  image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
  description: 'Sweet glutinous rice served with fresh mango slices and coconut sauce.',
  category: 'desserts'
}, {
  id: '7',
  name: 'Chocolate Hazelnut Tart',
  price: 8.49,
  image: 'https://images.unsplash.com/photo-1606313564200-e75d8e3ddc1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: 'Rich chocolate ganache in a buttery crust, topped with caramelized hazelnuts.',
  category: 'desserts'
}, {
  id: '8',
  name: 'Matcha Cheesecake',
  price: 7.49,
  image: 'https://images.unsplash.com/photo-1546454867-aa0432e2bfdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  description: 'Creamy cheesecake with a delicate matcha flavor on a graham cracker crust.',
  category: 'desserts'
},
// Preserved Fruits
{
  id: '9',
  name: 'Fresh Jerux - Mango',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: 'Preserved mango slices with natural ingredients, bursting with tropical flavor.',
  category: 'preserved fruits'
}, {
  id: '10',
  name: 'Fresh Jerux - Pineapple',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80',
  description: 'Sweet and tangy preserved pineapple, perfect for a healthy snack.',
  category: 'preserved fruits'
}, {
  id: '11',
  name: 'Fresh Jerux - Mixed Berries',
  price: 7.49,
  image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  description: 'A mix of preserved strawberries, blueberries, and raspberries.',
  category: 'preserved fruits'
}, {
  id: '12',
  name: 'Fresh Jerux - Citrus Medley',
  price: 7.29,
  image: 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: 'Preserved oranges, lemons, and limes with a hint of honey.',
  category: 'preserved fruits'
}];
const Menu = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity
  } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const categories = [{
    id: 'all',
    name: 'All Products'
  }, {
    id: 'beverages',
    name: 'Beverages'
  }, {
    id: 'desserts',
    name: 'Desserts'
  }, {
    id: 'preserved fruits',
    name: 'Preserved Fruits'
  }];
  const filteredProducts = activeCategory === 'all' ? productsData : productsData.filter(product => product.category === activeCategory);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  return <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25 z-10"></div>
        <div className="relative h-[30vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1556911073-52527ac43761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Our Menu
              </h1>
              <p className="text-lg md:text-xl text-white">
                Explore our selection of high-quality food & beverages
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Menu Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-2 min-w-max pb-2">
              {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full whitespace-nowrap ${activeCategory === category.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                  {category.name}
                </button>)}
            </div>
          </div>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          {/* Floating Cart Button */}
          {totalItems > 0 && <button className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors z-40" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            </button>}
          {/* Cart Sidebar */}
          {isCartOpen && <>
              <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsCartOpen(false)}></div>
              <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-lg z-50 overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Your Cart</h2>
                    <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                      <CloseIcon className="h-6 w-6" />
                    </button>
                  </div>
                  {cartItems.length === 0 ? <div className="text-center py-8">
                      <p className="text-gray-500">Your cart is empty</p>
                    </div> : <>
                      <div className="space-y-4 mb-6">
                        {cartItems.map(item => <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
                            <div className="flex items-center">
                              <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                              <div className="ml-4">
                                <h3 className="font-medium">
                                  {item.product.name}
                                </h3>
                                <p className="text-red-600">
                                  ${item.product.price.toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center border rounded-l">
                                -
                              </button>
                              <span className="w-8 h-8 flex items-center justify-center border-t border-b">
                                {item.quantity}
                              </span>
                              <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center border rounded-r">
                                +
                              </button>
                              <button onClick={() => removeFromCart(item.product.id)} className="ml-4 text-gray-500 hover:text-red-600">
                                <TrashIcon className="h-5 w-5" />
                              </button>
                            </div>
                          </div>)}
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between mb-2">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-6">
                          <span>Tax</span>
                          <span>${(subtotal * 0.1).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-bold mb-6">
                          <span>Total</span>
                          <span>${(subtotal * 1.1).toFixed(2)}</span>
                        </div>
                        <Button variant="primary" size="lg" fullWidth>
                          Proceed to Checkout
                        </Button>
                      </div>
                    </>}
                </div>
              </div>
            </>}
        </div>
      </section>
    </div>;
};
// Add missing icons
const CloseIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>;
const TrashIcon = ({
  className
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>;
export default Menu;