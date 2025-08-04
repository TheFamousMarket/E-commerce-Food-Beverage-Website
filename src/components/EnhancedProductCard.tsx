import React, { useState } from 'react';
import { Product, useCart } from '../context/CartContext';
import Button from './Button';
import { motion } from 'framer-motion';
import { Play, Pause, Info, ThumbsUp } from 'lucide-react';
interface EnhancedProductCardProps {
  product: Product;
  showVideo?: boolean;
}
const EnhancedProductCard: React.FC<EnhancedProductCardProps> = ({
  product,
  showVideo = false
}) => {
  const {
    addToCart
  } = useCart();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShowingSensory, setIsShowingSensory] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  // Mock sensory data
  const sensoryInfo = {
    texture: product.category === 'desserts' ? 'Soft and creamy' : product.category === 'beverages' ? 'Smooth and refreshing' : product.category === 'cornman' ? 'Crispy outside, tender inside' : 'Fresh and juicy',
    aroma: product.category === 'desserts' ? 'Sweet with vanilla notes' : product.category === 'beverages' ? 'Aromatic and invigorating' : product.category === 'cornman' ? 'Buttery with a hint of pandan' : 'Fruity and tropical',
    taste: product.category === 'desserts' ? 'Rich and indulgent' : product.category === 'beverages' ? 'Balanced sweetness with depth' : product.category === 'cornman' ? 'Sweet and savory' : 'Tangy and sweet'
  };
  // Mock video URL based on product category
  const videoUrl = product.category === 'beverages' ? 'https://player.vimeo.com/external/370467553.sd.mp4?s=99b2c071b9a1e06ad83801b52a20cc8fe875a776&profile_id=164&oauth2_token_id=57447761' : product.category === 'desserts' ? 'https://player.vimeo.com/external/370467365.sd.mp4?s=33e59c9e6b5d417326ae55211d9d71d05a3ec7d5&profile_id=164&oauth2_token_id=57447761' : product.category === 'cornman' ? 'https://player.vimeo.com/external/371923791.sd.mp4?s=a5b9d0fb5ba93bcdd3d3f7e4f38f7d339e6b68d7&profile_id=164&oauth2_token_id=57447761' : 'https://player.vimeo.com/external/371904819.sd.mp4?s=7a3794e405f9b3e9f0bf1b308efce36ed0208d03&profile_id=164&oauth2_token_id=57447761';
  // Handle mouse down for 360 rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };
  // Handle mouse move for 360 rotation
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      setRotation(prev => (prev + deltaX * 0.5) % 360);
      setStartX(e.clientX);
    }
  };
  // Handle mouse up for 360 rotation
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return <motion.div whileHover={{
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        {showVideo ? <div className="relative w-full h-full">
            <video src={videoUrl} className="w-full h-full object-cover" loop muted playsInline autoPlay={isPlaying} />
            <button onClick={() => setIsPlaying(!isPlaying)} className="absolute bottom-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white transition-colors">
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          </div> : <motion.div className="h-full w-full cursor-grab" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} whileHover={{
        scale: 1.05
      }} style={{
        backgroundImage: `url(${product.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `rotateY(${rotation}deg)`,
        transition: isDragging ? 'none' : 'transform 0.5s ease'
      }}>
            <div className="absolute bottom-2 right-2 text-xs bg-white/80 px-2 py-1 rounded-full text-gray-700">
              Drag to rotate
            </div>
          </motion.div>}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-gray-900">
            {product.name}
          </h3>
          <motion.button whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} onClick={() => setIsShowingSensory(!isShowingSensory)} className="text-gray-500 hover:text-indigo-600 transition-colors">
            <Info size={16} />
          </motion.button>
        </div>
        {isShowingSensory ? <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="bg-gray-50 p-3 rounded-md mb-3">
            <p className="text-xs font-medium text-gray-800 mb-1">
              Sensory Experience:
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-medium">Texture:</span>{' '}
              {sensoryInfo.texture}
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-medium">Aroma:</span> {sensoryInfo.aroma}
            </p>
            <p className="text-xs text-gray-600">
              <span className="font-medium">Taste:</span> {sensoryInfo.taste}
            </p>
          </motion.div> : <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
            {product.description}
          </p>}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-indigo-600 font-semibold">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center">
            <motion.button whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.9
          }} className="mr-2 text-gray-400 hover:text-indigo-500 transition-colors">
              <ThumbsUp size={16} />
            </motion.button>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default EnhancedProductCard;