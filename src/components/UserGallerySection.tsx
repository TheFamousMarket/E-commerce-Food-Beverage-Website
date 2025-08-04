import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ThumbsUp, MessageSquare, Share2 } from 'lucide-react';
interface UserPhoto {
  id: string;
  username: string;
  userAvatar: string;
  image: string;
  caption: string;
  product: string;
  likes: number;
  comments: number;
  timestamp: string;
}
const UserGallerySection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<UserPhoto | null>(null);
  // Sample user photos
  const userPhotos: UserPhoto[] = [{
    id: '1',
    username: 'foodie_sarah',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    caption: 'Enjoying my favorite Susu Cincau on a hot day! So refreshing! #THEFMSMKT #RefreshingTreats',
    product: 'Susu Cincau',
    likes: 42,
    comments: 7,
    timestamp: '2 days ago'
  }, {
    id: '2',
    username: 'dessert_lover',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    caption: 'This Mango Sticky Rice is absolutely divine! The perfect balance of sweet and savory. #DessertHeaven',
    product: 'Mango Sticky Rice',
    likes: 78,
    comments: 12,
    timestamp: '1 week ago'
  }, {
    id: '3',
    username: 'tea_enthusiast',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    caption: 'Starting my morning with Bukocha tea from @THEFMSMKT. The aroma is incredible! #TeaTime #MorningRitual',
    product: 'Bukocha',
    likes: 56,
    comments: 5,
    timestamp: '3 days ago'
  }, {
    id: '4',
    username: 'snack_master',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    image: 'https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80',
    caption: 'These Fresh Jerux pineapple snacks are my new addiction! Perfect for on-the-go. #HealthySnacking',
    product: 'Fresh Jerux - Pineapple',
    likes: 34,
    comments: 3,
    timestamp: '5 days ago'
  }, {
    id: '5',
    username: 'corn_fanatic',
    userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    image: 'https://images.unsplash.com/photo-1470119693884-47d3a1d1f180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    caption: 'The Cheddar Cheese Jagung Pandan is out of this world! The combination of flavors is perfect. #SUPERCORN #CheeseLover',
    product: 'Jagung Pandan - Cheddar Cheese',
    likes: 62,
    comments: 8,
    timestamp: '2 days ago'
  }, {
    id: '6',
    username: 'sweet_tooth',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    image: 'https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80',
    caption: 'Coconut Pandan Cake is my favorite dessert from THEFMSMKT! So light and fragrant. #PandanLove',
    product: 'Coconut Pandan Cake',
    likes: 89,
    comments: 14,
    timestamp: '1 day ago'
  }];
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Customer Gallery
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See how our community enjoys THEFMSMKT products. Share your own
            experience using #THEFMSMKT on social media.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {userPhotos.map((photo, index) => <motion.div key={photo.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} whileHover={{
          y: -5
        }} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer" onClick={() => setActivePhoto(photo)}>
              <img src={photo.image} alt={`Photo by ${photo.username}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center mb-2">
                  <img src={photo.userAvatar} alt={photo.username} className="w-8 h-8 rounded-full object-cover mr-2" />
                  <span className="text-white font-medium">
                    {photo.username}
                  </span>
                </div>
                <p className="text-white text-sm line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </motion.div>)}
          <motion.div whileHover={{
          y: -5
        }} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 flex flex-col items-center justify-center cursor-pointer">
            <Camera className="w-10 h-10 text-gray-400 mb-2" />
            <p className="text-gray-600 font-medium">Share your photo</p>
            <p className="text-gray-500 text-sm">Use #THEFMSMKT</p>
          </motion.div>
        </div>
        {/* Photo modal */}
        <AnimatePresence>
          {activePhoto && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setActivePhoto(null)}>
              <motion.div initial={{
            scale: 0.9,
            opacity: 0
          }} animate={{
            scale: 1,
            opacity: 1
          }} exit={{
            scale: 0.9,
            opacity: 0
          }} className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row" onClick={e => e.stopPropagation()}>
                <div className="md:w-2/3 bg-gray-100">
                  <img src={activePhoto.image} alt={`Photo by ${activePhoto.username}`} className="w-full h-full object-contain" />
                </div>
                <div className="md:w-1/3 p-6 flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img src={activePhoto.userAvatar} alt={activePhoto.username} className="w-10 h-10 rounded-full object-cover mr-3" />
                      <div>
                        <p className="font-medium">{activePhoto.username}</p>
                        <p className="text-gray-500 text-xs">
                          {activePhoto.timestamp}
                        </p>
                      </div>
                    </div>
                    <button onClick={() => setActivePhoto(null)}>
                      <X className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                  <div className="border-b pb-4 mb-4">
                    <p className="text-gray-800 mb-2">{activePhoto.caption}</p>
                    <p className="text-red-600 text-sm">
                      Product: {activePhoto.product}
                    </p>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm mb-6">
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {activePhoto.likes} likes
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      {activePhoto.comments} comments
                    </div>
                    <div className="flex items-center">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </div>
                  </div>
                  <div className="mt-auto">
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                      View this product
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
};
export default UserGallerySection;