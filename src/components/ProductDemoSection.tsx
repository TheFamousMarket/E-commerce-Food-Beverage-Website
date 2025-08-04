import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
interface ProductDemo {
  id: string;
  name: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  videoUrl: string;
  description: string;
}
const ProductDemoSection: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  // Sample product demos
  const productDemos: ProductDemo[] = [{
    id: '1',
    name: 'Susu Cincau Preparation',
    category: 'beverages',
    beforeImage: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    afterImage: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    videoUrl: 'https://player.vimeo.com/external/370467553.sd.mp4?s=99b2c071b9a1e06ad83801b52a20cc8fe875a776&profile_id=164&oauth2_token_id=57447761',
    description: 'Watch how our signature Susu Cincau is prepared, from brewing the perfect grass jelly to creating the ideal milk blend for that refreshing taste.'
  }, {
    id: '2',
    name: 'Jagung Pandan Creation',
    category: 'cornman',
    beforeImage: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    afterImage: 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    videoUrl: 'https://player.vimeo.com/external/371923791.sd.mp4?s=a5b9d0fb5ba93bcdd3d3f7e4f38f7d339e6b68d7&profile_id=164&oauth2_token_id=57447761',
    description: 'See how our premium Jagung Pandan is crafted from select corn, infused with real pandan extract, and topped with our signature flavors.'
  }, {
    id: '3',
    name: 'Mango Sticky Rice Assembly',
    category: 'desserts',
    beforeImage: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1608&q=80',
    afterImage: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    videoUrl: 'https://player.vimeo.com/external/370467365.sd.mp4?s=33e59c9e6b5d417326ae55211d9d71d05a3ec7d5&profile_id=164&oauth2_token_id=57447761',
    description: 'Watch our culinary team prepare our famous Mango Sticky Rice, from cooking the perfect glutinous rice to selecting and cutting the ripest mangoes.'
  }];
  const nextDemo = () => {
    setActiveDemo(prev => (prev + 1) % productDemos.length);
    setIsPlaying(false);
    setShowBeforeAfter(false);
  };
  const prevDemo = () => {
    setActiveDemo(prev => (prev - 1 + productDemos.length) % productDemos.length);
    setIsPlaying(false);
    setShowBeforeAfter(false);
  };
  const currentDemo = productDemos[activeDemo];
  return <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See Our Products in Action
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch how our products are made and prepared with care, using the
            finest ingredients and traditional techniques.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video/Image showcase */}
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
              <AnimatePresence mode="wait">
                {showBeforeAfter ? <motion.div key="before-after" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="relative w-full h-full">
                    <div className="absolute inset-0 flex">
                      <div className="w-1/2 h-full relative">
                        <img src={currentDemo.beforeImage} alt={`${currentDemo.name} before`} className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
                          Before
                        </div>
                      </div>
                      <div className="w-1/2 h-full relative">
                        <img src={currentDemo.afterImage} alt={`${currentDemo.name} after`} className="w-full h-full object-cover" />
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 text-sm rounded">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button onClick={() => setShowBeforeAfter(false)} className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full">
                        <Play size={20} />
                      </button>
                    </div>
                  </motion.div> : <motion.div key="video" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="w-full h-full">
                    <video src={currentDemo.videoUrl} className="w-full h-full object-cover" loop muted playsInline autoPlay={isPlaying} />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                      <button onClick={() => setShowBeforeAfter(true)} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center">
                        <Eye size={16} className="mr-1" /> Before & After
                      </button>
                      <button onClick={() => setIsPlaying(!isPlaying)} className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full">
                        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                      </button>
                    </div>
                  </motion.div>}
              </AnimatePresence>
            </div>
            {/* Navigation controls */}
            <div className="flex justify-between mt-4">
              <button onClick={prevDemo} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full">
                <ChevronLeft size={24} />
              </button>
              <div className="flex space-x-2">
                {productDemos.map((_, index) => <button key={index} onClick={() => {
                setActiveDemo(index);
                setIsPlaying(false);
                setShowBeforeAfter(false);
              }} className={`w-3 h-3 rounded-full ${index === activeDemo ? 'bg-red-600' : 'bg-gray-300'}`} />)}
              </div>
              <button onClick={nextDemo} className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          {/* Description and product info */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm mb-4">
              {currentDemo.category.charAt(0).toUpperCase() + currentDemo.category.slice(1)}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentDemo.name}
            </h3>
            <p className="text-gray-700 mb-6">{currentDemo.description}</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                <span className="text-gray-700">Made fresh daily</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <span className="text-gray-700">
                  Locally sourced ingredients
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                <span className="text-gray-700">
                  Traditional recipe with modern twist
                </span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-2">
                Share your experience:
              </h4>
              <div className="flex space-x-2">
                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm">
                  Upload your photo
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full text-sm">
                  Leave a review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProductDemoSection;