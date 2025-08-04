import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import EnhancedProductCard from '../components/EnhancedProductCard';
import { ShoppingCart } from 'lucide-react';
import { Product, useCart } from '../context/CartContext';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
// Updated products data with more authentic images
const productsData = [
// Beverages
{
  id: '1',
  name: 'Susu Cincau',
  price: 4.99,
  image: 'https://images.unsplash.com/photo-1628191139360-4083564d03fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'A refreshing milk drink with grass jelly, perfect for hot days.',
  category: 'beverages'
}, {
  id: '2',
  name: 'Bukocha',
  price: 5.99,
  image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
  description: 'Our signature tea blend with unique aromatic flavors.',
  category: 'beverages'
}, {
  id: '3',
  name: 'Signature Masala Chai',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'Our take on the classic masala chai with a special blend of spices.',
  category: 'beverages'
}, {
  id: '4',
  name: 'Iced Matcha Latte',
  price: 5.49,
  image: 'https://images.unsplash.com/photo-1591284962532-72a025761f62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  description: 'Premium matcha powder whisked with milk and served over ice.',
  category: 'beverages'
},
// Desserts
{
  id: '5',
  name: 'Coconut Pandan Cake',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2078&q=80',
  description: 'Light and fluffy cake infused with pandan extract and topped with coconut cream.',
  category: 'desserts'
}, {
  id: '6',
  name: 'Mango Sticky Rice',
  price: 7.99,
  image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1984&q=80',
  description: 'Sweet glutinous rice served with fresh mango slices and coconut sauce.',
  category: 'desserts'
}, {
  id: '7',
  name: 'Chocolate Hazelnut Tart',
  price: 8.49,
  image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80',
  description: 'Rich chocolate ganache in a buttery crust, topped with caramelized hazelnuts.',
  category: 'desserts'
}, {
  id: '8',
  name: 'Matcha Cheesecake',
  price: 7.49,
  image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
  description: 'Creamy cheesecake with a delicate matcha flavor on a graham cracker crust.',
  category: 'desserts'
},
// Preserved Fruits
{
  id: '9',
  name: 'Fresh Jerux - Mango',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'Preserved mango slices with natural ingredients, bursting with tropical flavor.',
  category: 'preserved fruits'
}, {
  id: '10',
  name: 'Fresh Jerux - Pineapple',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  description: 'Sweet and tangy preserved pineapple, perfect for a healthy snack.',
  category: 'preserved fruits'
}, {
  id: '11',
  name: 'Fresh Jerux - Mixed Berries',
  price: 7.49,
  image: 'https://images.unsplash.com/photo-1563583991335-a700b4d9ce7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description: 'A mix of preserved strawberries, blueberries, and raspberries.',
  category: 'preserved fruits'
}, {
  id: '12',
  name: 'Fresh Jerux - Citrus Medley',
  price: 7.29,
  image: 'https://images.unsplash.com/photo-1596404643764-2a2461483a3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80',
  description: 'Preserved oranges, lemons, and limes with a hint of honey.',
  category: 'preserved fruits'
},
// BRAND CORNMAN - Jagung Pandan
{
  id: 'c1',
  name: 'Jagung Pandan - Susu',
  price: 8.99,
  image: 'https://images.unsplash.com/photo-1633896949673-1eb9d131a9b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description: 'Sweet pandan-infused corn topped with creamy milk flavor.',
  category: 'cornman'
}, {
  id: 'c2',
  name: 'Jagung Pandan - Cheddar Cheese',
  price: 9.49,
  image: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description: 'Aromatic pandan corn with rich cheddar cheese topping.',
  category: 'cornman'
}, {
  id: 'c3',
  name: 'Jagung Pandan - Biscoff',
  price: 9.99,
  image: 'https://images.unsplash.com/photo-1607114910421-a7c2b982d497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description: 'Sweet pandan corn topped with caramelized Biscoff cookie crumbles.',
  category: 'cornman'
}, {
  id: 'c4',
  name: 'Jagung Pandan - Oreo',
  price: 9.49,
  image: 'https://images.unsplash.com/photo-1613476798407-2e9e3a3fb245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  description: 'Fragrant pandan corn with crushed Oreo cookies and cream.',
  category: 'cornman'
}, {
  id: 'c5',
  name: 'Jagung Pandan - Salt & Butter',
  price: 8.49,
  image: 'https://images.unsplash.com/photo-1612204126153-b1bb2784d7ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description: 'Classic pandan corn with the perfect balance of salt and rich butter.',
  category: 'cornman'
}, {
  id: 'c6',
  name: 'Jagung Pandan - Choc',
  price: 9.29,
  image: 'https://images.unsplash.com/photo-1633897552973-a138e867a673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description: 'Delicious pandan corn drizzled with premium chocolate sauce.',
  category: 'cornman'
}, {
  id: 'c7',
  name: 'Jagung Pandan - Caramel',
  price: 9.29,
  image: 'https://images.unsplash.com/photo-1594489573192-2d0d56efa9f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  description: 'Sweet pandan corn topped with homemade caramel sauce.',
  category: 'cornman'
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
    id: 'cornman',
    name: 'BRAND CORNMAN'
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
      {/* Hero Section - Updated with more modern styling */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-gray-900/50 z-10"></div>
        <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80')"
      }}>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Menu
              </h1>
              <p className="text-lg md:text-xl text-gray-200">
                Explore our selection of high-quality food & beverages
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter - Updated styling */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="mb-10 overflow-x-auto">
            <div className="flex space-x-3 min-w-max pb-2">
              {categories.map(category => <motion.button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2.5 rounded-full whitespace-nowrap transition-colors ${activeCategory === category.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                  {category.name}
                </motion.button>)}
            </div>
          </motion.div>

          {/* Featured CORNMAN Banner - Updated design */}
          <AnimatePresence>
            {activeCategory === 'cornman' && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} exit={{
            opacity: 0,
            height: 0
          }} transition={{
            duration: 0.3
          }} className="mb-10 p-8 bg-gradient-to-r from-emerald-50 to-indigo-50 rounded-xl border border-emerald-100 overflow-hidden">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <motion.div initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: 0.1,
                type: 'spring',
                stiffness: 100
              }} className="w-28 h-28 flex-shrink-0">
                    <img src="/Screenshot_2025-07-21_061937.png" alt="SUPER CORN Logo" className="w-full h-full object-contain" />
                  </motion.div>
                  <div className="flex-1">
                    <motion.div initial={{
                  opacity: 0,
                  y: -10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.2
                }} className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold text-gray-900 mb-1">
                        SUPER CORN
                      </h2>
                      <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full uppercase font-bold">
                        Premium
                      </span>
                    </motion.div>
                    <motion.p initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.3
                }} className="text-gray-700 mb-4">
                      Try our new premium Jagung Pandan in 7 delicious flavors!
                    </motion.p>
                    <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.4
                }} className="flex flex-wrap gap-2">
                      {['Susu', 'Cheddar Cheese', 'Biscoff', 'Oreo', 'Salt & Butter', 'Choc', 'Caramel'].map((flavor, index) => <motion.span key={flavor} initial={{
                    opacity: 0,
                    x: -20
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: 0.4 + index * 0.1
                  }} className="bg-white text-emerald-800 px-3 py-1 rounded-full text-sm shadow-sm">
                          {flavor}
                        </motion.span>)}
                    </motion.div>
                  </div>
                </div>
              </motion.div>}
          </AnimatePresence>

          {/* Products Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product, index) => <motion.div key={product.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              scale: 0.9
            }} transition={{
              duration: 0.3,
              delay: index * 0.05
            }}>
                  {/* Use EnhancedProductCard with video for the first item in each category */}
                  {index % 4 === 0 ? <EnhancedProductCard product={product} showVideo={true} /> : <EnhancedProductCard product={product} />}
                </motion.div>)}
            </AnimatePresence>
          </motion.div>

          {/* Floating Cart Button */}
          <AnimatePresence>
            {totalItems > 0 && <motion.button initial={{
            scale: 0,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0,
            opacity: 0
          }} whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors z-40" onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="h-6 w-6" />
                <motion.span key={totalItems} initial={{
              scale: 0.5
            }} animate={{
              scale: 1
            }} className="absolute -top-1 -right-1 bg-white text-indigo-600 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </motion.span>
              </motion.button>}
          </AnimatePresence>

          {/* Cart Sidebar */}
          <AnimatePresence>
            {isCartOpen && <>
                <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} exit={{
              opacity: 0
            }} transition={{
              duration: 0.2
            }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsCartOpen(false)}></motion.div>
                <motion.div initial={{
              x: '100%'
            }} animate={{
              x: 0
            }} exit={{
              x: '100%'
            }} transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300
            }} className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-lg z-50 overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Your Cart</h2>
                      <motion.button whileHover={{
                    rotate: 90
                  }} transition={{
                    duration: 0.2
                  }} onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-gray-700">
                        <CloseIcon className="h-6 w-6" />
                      </motion.button>
                    </div>
                    {cartItems.length === 0 ? <motion.div initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} className="text-center py-8">
                        <p className="text-gray-500">Your cart is empty</p>
                      </motion.div> : <>
                        <motion.div className="space-y-4 mb-6">
                          <AnimatePresence>
                            {cartItems.map(item => <motion.div key={item.product.id} initial={{
                        opacity: 0,
                        x: 20
                      }} animate={{
                        opacity: 1,
                        x: 0
                      }} exit={{
                        opacity: 0,
                        x: -20,
                        height: 0
                      }} className="flex items-center justify-between border-b pb-4">
                                <div className="flex items-center">
                                  <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
                                  <div className="ml-4">
                                    <h3 className="font-medium">
                                      {item.product.name}
                                    </h3>
                                    <p className="text-indigo-600">
                                      ${item.product.price.toFixed(2)}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <motion.button whileHover={{
                            backgroundColor: '#f3f4f6'
                          }} whileTap={{
                            scale: 0.95
                          }} onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center border rounded-l">
                                    -
                                  </motion.button>
                                  <motion.span key={item.quantity} initial={{
                            scale: 1.2
                          }} animate={{
                            scale: 1
                          }} className="w-8 h-8 flex items-center justify-center border-t border-b">
                                    {item.quantity}
                                  </motion.span>
                                  <motion.button whileHover={{
                            backgroundColor: '#f3f4f6'
                          }} whileTap={{
                            scale: 0.95
                          }} onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center border rounded-r">
                                    +
                                  </motion.button>
                                  <motion.button whileHover={{
                            scale: 1.1,
                            color: '#4f46e5'
                          }} whileTap={{
                            scale: 0.9
                          }} onClick={() => removeFromCart(item.product.id)} className="ml-4 text-gray-500 hover:text-indigo-600">
                                    <TrashIcon className="h-5 w-5" />
                                  </motion.button>
                                </div>
                              </motion.div>)}
                          </AnimatePresence>
                        </motion.div>
                        <motion.div initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    delay: 0.2
                  }} className="border-t pt-4">
                          <div className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <motion.span key={subtotal} initial={{
                        scale: 1.1
                      }} animate={{
                        scale: 1
                      }}>
                              ${subtotal.toFixed(2)}
                            </motion.span>
                          </div>
                          <div className="flex justify-between mb-6">
                            <span>Tax</span>
                            <motion.span key={subtotal} initial={{
                        scale: 1.1
                      }} animate={{
                        scale: 1
                      }}>
                              ${(subtotal * 0.1).toFixed(2)}
                            </motion.span>
                          </div>
                          <div className="flex justify-between font-bold mb-6">
                            <span>Total</span>
                            <motion.span key={subtotal} initial={{
                        scale: 1.1
                      }} animate={{
                        scale: 1
                      }}>
                              ${(subtotal * 1.1).toFixed(2)}
                            </motion.span>
                          </div>
                          <motion.div whileHover={{
                      scale: 1.02
                    }} whileTap={{
                      scale: 0.98
                    }}>
                            <Button variant="primary" size="lg" fullWidth>
                              Proceed to Checkout
                            </Button>
                          </motion.div>
                        </motion.div>
                      </>}
                  </div>
                </motion.div>
              </>}
          </AnimatePresence>
        </div>
      </section>
    </div>;
};
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