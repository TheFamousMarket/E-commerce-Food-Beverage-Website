import React from 'react';
import { Product, useCart } from '../context/CartContext';
import Button from './Button';
import { motion } from 'framer-motion';
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {
    addToCart
  } = useCart();
  return <motion.div whileHover={{
    y: -5,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
  }} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <motion.div className="h-48 overflow-hidden" whileHover={{
      scale: 1.05
    }} transition={{
      duration: 0.3
    }}>
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </motion.div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-gray-700 text-sm mb-2 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-red-600 font-semibold">
            ${product.price.toFixed(2)}
          </span>
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
    </motion.div>;
};
export default ProductCard;