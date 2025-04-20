import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
// Sample featured products
const featuredProducts = [{
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
  name: 'Fresh Jerux',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  description: 'Preserved fruits with natural ingredients, bursting with flavor.',
  category: 'preserved fruits'
}, {
  id: '4',
  name: 'Signature Masala Chai',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  description: 'Our take on the classic masala chai with a special blend of spices.',
  category: 'beverages'
}];
const Home = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25 z-10"></div>
        <div className="relative h-[70vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Discover High-Quality Delights at THEFMSMKT
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                Your hub for delicious food & drinks. Experience our carefully
                crafted products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button variant="primary" size="lg">
                    View Our Menu
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Link to="/menu" className="text-red-600 hover:text-red-700 flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About THEFMSMKT
              </h2>
              <p className="text-gray-700 mb-6">
                THEFMSMKT is more than just a brand—it's a community hub for
                high-quality food and beverage products. Our CMNTYPLX space
                brings together the best desserts, beverages, and preserved
                fruits, all crafted with care and premium ingredients.
              </p>
              <p className="text-gray-700 mb-6">
                Drawing inspiration from successful food businesses, we've
                created a unique experience that combines quality products with
                a strong community focus.
              </p>
              <Link to="/about">
                <Button variant="secondary">Read Our Story</Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" alt="THEFMSMKT Community Space" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial/CTA Section */}
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">DSSRT HUB</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience our unique selection of desserts, beverages, and
            preserved fruits. Join our community of food lovers.
          </p>
          <Link to="/menu">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
              Order Online Now
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;