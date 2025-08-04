import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import EnhancedProductCard from '../components/EnhancedProductCard';
import BrandStorySection from '../components/BrandStorySection';
import ProductDemoSection from '../components/ProductDemoSection';
import UserGallerySection from '../components/UserGallerySection';
import ARTryOnSection from '../components/ARTryOnSection';
import { ArrowRight } from 'lucide-react';
// Updated featured products with more genuine product images
const featuredProducts = [{
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
  name: 'Fresh Jerux',
  price: 6.99,
  image: 'https://images.unsplash.com/photo-1570696516188-ade861b84a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'Preserved fruits with natural ingredients, bursting with flavor.',
  category: 'preserved fruits'
}, {
  id: '4',
  name: 'Signature Masala Chai',
  price: 3.99,
  image: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'Our take on the classic masala chai with a special blend of spices.',
  category: 'beverages'
}];
const Home = () => {
  return <div className="w-full bg-white">
      {/* Hero Section - Updated with more modern design */}
      <section className="relative bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-gray-900/50 z-10"></div>
        <div className="relative h-[80vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80')"
      }}>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Discover Authentic Delights at THEFMSMKT
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Your hub for delicious food & drinks. Experience our carefully
                crafted products with premium ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button variant="primary" size="lg">
                    View Our Menu
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products with video */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Products
            </h2>
            <Link to="/menu" className="text-indigo-600 hover:text-indigo-700 flex items-center font-medium">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => index === 0 ? <EnhancedProductCard key={product.id} product={product} showVideo={true} /> : <EnhancedProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>
      {/* Product Demonstration Section */}
      <ProductDemoSection />
      {/* About Section - Updated styling */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About THEFMSMKT
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                THEFMSMKT is more than just a brand—it's a community hub for
                high-quality food and beverage products. Our CMNTYPLX space
                brings together the best desserts, beverages, and preserved
                fruits, all crafted with care and premium ingredients.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                Drawing inspiration from successful food businesses, we've
                created a unique experience that combines quality products with
                a strong community focus.
              </p>
              <Link to="/about">
                <Button variant="secondary">Read Our Story</Button>
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="THEFMSMKT Community Space" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* Brand Story & Values Section */}
      <BrandStorySection />
      {/* AR Try-On Section */}
      <ARTryOnSection />
      {/* User Gallery Section */}
      <UserGallerySection />
      {/* Testimonial/CTA Section - Updated design */}
      <section className="py-20 px-4 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">DSSRT HUB</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
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