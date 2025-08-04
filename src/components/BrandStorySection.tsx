import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Leaf, Users, Globe, ArrowRight, ChevronRight } from 'lucide-react';
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
interface MakerProfile {
  name: string;
  role: string;
  image: string;
  story: string;
}
interface ImpactStory {
  name: string;
  location: string;
  image: string;
  story: string;
}
const BrandStorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'makers' | 'impact' | 'community'>('timeline');
  const [expandedMaker, setExpandedMaker] = useState<string | null>(null);
  const [expandedImpact, setExpandedImpact] = useState<string | null>(null);
  // Timeline data
  const timelineEvents: TimelineEvent[] = [{
    year: '2018',
    title: 'The Beginning',
    description: 'THEFMSMKT started as a small stall in a local food market, selling traditional desserts.'
  }, {
    year: '2019',
    title: 'Expanding Horizons',
    description: 'We introduced our beverage line and started collaborating with local farmers for ingredients.'
  }, {
    year: '2020',
    title: 'CMNTYPLX Born',
    description: 'Our community space was established, creating a hub for food lovers and community events.'
  }, {
    year: '2021',
    title: 'Ethical Commitment',
    description: 'We formalized our commitment to ethical sourcing and sustainable packaging.'
  }, {
    year: '2022',
    title: 'SUPER CORN Launch',
    description: 'Our signature CORNMAN line was launched, featuring premium ingredients and traditional flavors.'
  }, {
    year: '2023',
    title: 'Community Impact',
    description: 'Started our microfranchising program to support local entrepreneurs.'
  }];
  // Makers data
  const makers: MakerProfile[] = [{
    name: 'Amir Hassan',
    role: 'Head Chef & Founder',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    story: 'Amir started THEFMSMKT with a passion for traditional Malaysian desserts. With 15 years of culinary experience, he combines traditional recipes with modern techniques. "I believe food brings people together, and that\'s the foundation of our community space."'
  }, {
    name: 'Sarah Lim',
    role: 'Beverage Specialist',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80',
    story: 'Sarah joined in 2019 to develop our signature beverage line. Her background in tea cultivation helps us source the finest ingredients. "Every cup tells a story of the land and people who grew these amazing ingredients."'
  }, {
    name: 'Raj Kumar',
    role: 'Sustainability Director',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    story: 'Raj oversees our ethical sourcing and sustainability initiatives. With a background in environmental science, he ensures our operations have minimal ecological impact. "We don\'t just sell food; we\'re building a sustainable future for our community."'
  }];
  // Impact stories
  const impactStories: ImpactStory[] = [{
    name: 'Farah Musa',
    location: 'Kampung Baru',
    image: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    story: "Through THEFMSMKT's microfranchising program, I was able to start my own business selling their products in my neighborhood. This has allowed me to support my family while being part of a brand that values quality and community."
  }, {
    name: 'Ahmad Zulkifli',
    location: 'Petaling Jaya',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    story: 'As a small-scale pandan farmer, partnering with THEFMSMKT has provided me with stable income and fair prices for my crop. Their commitment to supporting local agriculture has made a real difference in our farming community.'
  }];
  // Sustainability metrics
  const sustainabilityMetrics = [{
    label: 'Local Ingredients',
    value: '85%',
    icon: <Leaf className="w-5 h-5 text-green-500" />
  }, {
    label: 'Plastic Reduction',
    value: '70%',
    icon: <Globe className="w-5 h-5 text-blue-500" />
  }, {
    label: 'Community Support',
    value: '15 Projects',
    icon: <Heart className="w-5 h-5 text-red-500" />
  }, {
    label: 'Fair Trade Partners',
    value: '12',
    icon: <Users className="w-5 h-5 text-amber-500" />
  }];
  return <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Story & Values
        </h2>
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mb-10">
          <button onClick={() => setActiveTab('timeline')} className={`px-4 py-2 mx-2 mb-2 rounded-full ${activeTab === 'timeline' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
            Our Journey
          </button>
          <button onClick={() => setActiveTab('makers')} className={`px-4 py-2 mx-2 mb-2 rounded-full ${activeTab === 'makers' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
            Meet the Makers
          </button>
          <button onClick={() => setActiveTab('impact')} className={`px-4 py-2 mx-2 mb-2 rounded-full ${activeTab === 'impact' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
            Impact Stories
          </button>
          <button onClick={() => setActiveTab('community')} className={`px-4 py-2 mx-2 mb-2 rounded-full ${activeTab === 'community' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
            Our Impact
          </button>
        </div>
        {/* Timeline section */}
        <AnimatePresence mode="wait">
          {activeTab === 'timeline' && <motion.div key="timeline" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-100"></div>
              {timelineEvents.map((event, index) => <motion.div key={event.year} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <h3 className="text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{event.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-bold z-10">
                    {event.year.slice(2)}
                  </div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}></div>
                </motion.div>)}
            </motion.div>}
          {/* Makers section */}
          {activeTab === 'makers' && <motion.div key="makers" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {makers.map(maker => <motion.div key={maker.name} initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} whileHover={{
              y: -5
            }} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <div className="h-64 overflow-hidden">
                      <img src={maker.image} alt={maker.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {maker.name}
                      </h3>
                      <p className="text-red-600 mb-3">{maker.role}</p>
                      <AnimatePresence>
                        {expandedMaker === maker.name ? <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: 'auto',
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }}>
                            <p className="text-gray-700 mb-4">{maker.story}</p>
                            <button onClick={() => setExpandedMaker(null)} className="text-red-600 text-sm flex items-center">
                              Read less
                            </button>
                          </motion.div> : <motion.button onClick={() => setExpandedMaker(maker.name)} className="text-red-600 text-sm flex items-center">
                            Read their story <ChevronRight size={16} />
                          </motion.button>}
                      </AnimatePresence>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>}
          {/* Impact stories section */}
          {activeTab === 'impact' && <motion.div key="impact" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }} className="space-y-8">
              {impactStories.map(story => <motion.div key={story.name} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {story.name}
                      </h3>
                      <p className="text-red-600 mb-3">{story.location}</p>
                      <AnimatePresence>
                        {expandedImpact === story.name ? <motion.div initial={{
                    height: 0,
                    opacity: 0
                  }} animate={{
                    height: 'auto',
                    opacity: 1
                  }} exit={{
                    height: 0,
                    opacity: 0
                  }}>
                            <p className="text-gray-700 mb-4">
                              "{story.story}"
                            </p>
                            <button onClick={() => setExpandedImpact(null)} className="text-red-600 text-sm flex items-center">
                              Read less
                            </button>
                          </motion.div> : <motion.button onClick={() => setExpandedImpact(story.name)} className="text-red-600 text-sm flex items-center">
                            Read their story <ChevronRight size={16} />
                          </motion.button>}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>)}
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Want to share your story with us?
                </p>
                <a href="#" className="text-red-600 font-medium flex items-center justify-center">
                  Submit your story <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>}
          {/* Community impact section */}
          {activeTab === 'community' && <motion.div key="community" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.3
        }}>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Sustainability Commitment
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {sustainabilityMetrics.map((metric, index) => <motion.div key={metric.label} initial={{
                opacity: 0,
                scale: 0.8
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: index * 0.1
              }} className="bg-white p-4 rounded-lg text-center shadow-sm">
                      <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-3">
                        {metric.icon}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-1">
                        {metric.value}
                      </h4>
                      <p className="text-gray-600 text-sm">{metric.label}</p>
                    </motion.div>)}
                </div>
              </div>
              <div className="bg-red-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Involved
                </h3>
                <p className="text-gray-700 mb-6">
                  There are many ways you can participate in our community
                  initiatives and help us create a more sustainable food
                  ecosystem.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Volunteer
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Join our community events and help us spread awareness
                      about sustainable food practices.
                    </p>
                    <a href="#" className="text-red-600 font-medium flex items-center">
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Partner With Us
                    </h4>
                    <p className="text-gray-600 mb-4">
                      If you're a local producer or organization with similar
                      values, let's collaborate.
                    </p>
                    <a href="#" className="text-red-600 font-medium flex items-center">
                      Contact us <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Give Feedback
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Share your ideas on how we can further improve our
                      sustainability efforts.
                    </p>
                    <a href="#" className="text-red-600 font-medium flex items-center">
                      Submit feedback <ArrowRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
};
export default BrandStorySection;