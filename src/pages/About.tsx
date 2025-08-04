import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import BrandStorySection from '../components/BrandStorySection';
import { Building2, Users2, GraduationCap, HeartHandshake } from 'lucide-react';
const About = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25 z-10"></div>
        <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Story
              </h1>
              <p className="text-lg md:text-xl text-white">
                Learn about the vision and passion behind THEFMSMKT
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The THEFMSMKT Vision
          </h2>
          <p className="text-gray-700 mb-6">
            THEFMSMKT was born from a passion for high-quality food and
            beverages, with a focus on creating a community space where people
            can gather and enjoy exceptional products. Our brand encompasses
            both the overarching THEFMSMKT name and the physical CMNTYPLX space
            where our products come to life.
          </p>
          {/* Video showcase instead of static image */}
          <div className="my-10 relative rounded-lg overflow-hidden shadow-md">
            <video className="w-full h-80 object-cover" autoPlay loop muted playsInline src="https://player.vimeo.com/external/368763065.sd.mp4?s=13b82dca9b30e5dd3a689e0b96d1c521a5b63d45&profile_id=139&oauth2_token_id=57447761" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white italic text-center w-full p-4">
                Our CMNTYPLX space - where community and quality food come
                together
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Inspiration
          </h3>
          <p className="text-gray-700 mb-6">
            We draw inspiration from successful food businesses like Cha Bang
            Ang, Liur Leleh House, and Tea Thambi. Each of these establishments
            has taught us something valuable about quality products, unique
            offerings, and meaningful customer engagement.
          </p>
          <p className="text-gray-700 mb-6">
            Initially, we planned to follow a mobile vending model inspired by
            Tea Thambi and Foodbike Malaysia, but our vision evolved into
            creating a "Community Plex" space where people could gather and
            enjoy our offerings in a welcoming environment.
          </p>
          {/* Sensory description box */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Our Sensory Experience
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-red-600 mb-2">Sight</h5>
                <p className="text-gray-700 text-sm">
                  Bold, vibrant colors that catch the eye. Clean, minimalist
                  presentation that highlights the quality of our ingredients.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-red-600 mb-2">Aroma</h5>
                <p className="text-gray-700 text-sm">
                  Rich, inviting scents that hint at the natural flavors within.
                  From sweet pandan to aromatic tea blends.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-medium text-red-600 mb-2">Taste</h5>
                <p className="text-gray-700 text-sm">
                  Balanced flavors that delight the palate. Sweet meets savory,
                  traditional meets modern, in every bite and sip.
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Aesthetic
          </h3>
          <p className="text-gray-700 mb-6">
            THEFMSMKT embraces a clean, minimalist, and modern aesthetic. Our
            color palette features bold reds and pinks contrasted with crisp
            whites, complemented by bold typography that makes a statement.
            We're proud to be known as the "DSSRT HUB," a tagline that reflects
            our focus on desserts and sweet treats.
          </p>
          <div className="my-10">
            <div className="relative rounded-lg overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="THEFMSMKT Products" className="w-full h-80 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  View Gallery
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-500 italic text-center mt-2">
              Our carefully crafted desserts and beverages
            </p>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Looking Forward
          </h3>
          <p className="text-gray-700 mb-6">
            As we grow, we're exploring the potential for a microfranchising
            model, inspired by Foodbike Malaysia. We're also committed to making
            a positive social impact, whether through sourcing from local
            suppliers or future collaborations with community organizations.
          </p>
          <p className="text-gray-700 mb-10">
            We invite you to be part of our journey as we continue to create
            delicious products and build a vibrant community around food and
            beverages.
          </p>
          <div className="flex justify-center">
            <Link to="/menu">
              <Button variant="primary" size="lg">
                Explore Our Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Brand Story Section - Reusing component */}
      <BrandStorySection />
      {/* Partnerships & Social Impact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Partnerships & Social Impact
          </h2>
          <p className="text-gray-700 mb-6">
            Following the successful model of companies like Foodbike Malaysia,
            we're building strategic partnerships to maximize our social impact
            and create sustainable opportunities within our community.
          </p>
          {/* Transparency metrics */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">85%</div>
                <p className="text-gray-700 text-sm">Local Ingredients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">12+</div>
                <p className="text-gray-700 text-sm">Community Events</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">24</div>
                <p className="text-gray-700 text-sm">Local Jobs Created</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-1">70%</div>
                <p className="text-gray-700 text-sm">Plastic Reduction</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Government Collaboration
                </h3>
              </div>
              <p className="text-gray-700">
                We're working to establish partnerships with the Department of
                Social Welfare and other government agencies to identify and
                support individuals who can benefit from our microfranchise
                program.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Users2 className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  NGO Partnerships
                </h3>
              </div>
              <p className="text-gray-700">
                We're building relationships with NGOs focused on social
                innovation, education, and environmental sustainability to
                enrich our community impact.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Education & Training
                </h3>
              </div>
              <p className="text-gray-700">
                Through partnerships with educational institutions and training
                programs, we aim to provide comprehensive support and skill
                development for our community members.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <HeartHandshake className="w-6 h-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Financial Support
                </h3>
              </div>
              <p className="text-gray-700">
                We're developing relationships with financial institutions to
                provide access to resources needed for business growth and
                expansion within our community.
              </p>
            </div>
          </div>
          <div className="bg-red-50 p-6 rounded-lg mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Sustainable Development Goals
            </h3>
            <p className="text-gray-700 mb-4">
              Our mission aligns with the United Nations' Sustainable
              Development Goals (SDGs), particularly:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Goal 08: Decent work and economic growth</li>
              <li>Goal 09: Industry, Innovation and Infrastructure</li>
            </ul>
          </div>
          <div className="my-10">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Community Impact" className="w-full h-80 object-cover rounded-lg shadow-md mb-4" />
            <p className="text-sm text-gray-500 italic text-center">
              Making a positive impact in our community through sustainable
              business practices
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default About;