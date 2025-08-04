import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Camera, RefreshCw, Share2, Download } from 'lucide-react';
import Button from './Button';
const ARTryOnSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>('beverage');
  const [cameraActive, setCameraActive] = useState(false);
  // Sample AR products
  const arProducts = [{
    id: 'beverage',
    name: 'Beverages',
    icon: '🥤',
    description: 'See how our beverages would look on your table or in your hand.',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80'
  }, {
    id: 'dessert',
    name: 'Desserts',
    icon: '🍰',
    description: 'Visualize our desserts on your dining table before ordering.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80'
  }, {
    id: 'cornman',
    name: 'SUPER CORN',
    icon: '🌽',
    description: 'Try different SUPER CORN flavors virtually before you buy.',
    image: 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
  }];
  return <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Virtual Try-On Experience
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how our products would look in your space or in your hand with
            our AR technology. Try before you buy from the comfort of your
            device.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* AR Viewer */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-4">
              {cameraActive ? <div className="relative w-full h-full">
                  {/* This would be replaced with actual AR component in production */}
                  <div className="absolute inset-0 bg-black">
                    <video className="w-full h-full object-cover opacity-50" autoPlay loop muted playsInline src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a85b&profile_id=139&oauth2_token_id=57447761" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={arProducts.find(p => p.id === activeProduct)?.image} alt={arProducts.find(p => p.id === activeProduct)?.name} className="max-h-[80%] max-w-[80%] object-contain" style={{
                  filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
                }} />
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                    <motion.button whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.9
                }} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full">
                      <RefreshCw size={20} />
                    </motion.button>
                    <motion.button whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.9
                }} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full">
                      <Share2 size={20} />
                    </motion.button>
                    <motion.button whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.9
                }} className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full">
                      <Download size={20} />
                    </motion.button>
                  </div>
                </div> : <div className="w-full h-full flex flex-col items-center justify-center">
                  <Smartphone className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 mb-6">
                    Enable your camera to experience AR
                  </p>
                  <Button variant="primary" onClick={() => setCameraActive(true)} className="flex items-center">
                    <Camera className="w-4 h-4 mr-2" />
                    Start AR Experience
                  </Button>
                </div>}
            </div>
            <div className="flex justify-center space-x-4">
              {arProducts.map(product => <motion.button key={product.id} whileHover={{
              y: -2
            }} onClick={() => setActiveProduct(product.id)} className={`px-4 py-2 rounded-full flex items-center ${activeProduct === product.id ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <span className="mr-2">{product.icon}</span>
                  {product.name}
                </motion.button>)}
            </div>
          </div>
          {/* Info Panel */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4">
                  <span className="text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Select a Product
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Choose from our beverages, desserts, or SUPER CORN products.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4">
                  <span className="text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Enable Camera
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Allow access to your device's camera to use the AR feature.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4">
                  <span className="text-xl">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Point & Visualize
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Point your camera where you want to see the product and
                    adjust as needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full p-2 mr-4">
                  <span className="text-xl">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    Capture & Share
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Take a screenshot of your AR view and share it with friends.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 text-sm italic">
                "The AR feature helped me decide which dessert would look best
                for my dinner party. It's so immersive!"
              </p>
              <p className="text-gray-500 text-sm mt-2">- Sarah L., Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ARTryOnSection;