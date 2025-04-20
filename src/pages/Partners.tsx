import React from 'react';
import { Building2, Users2, Wallet, GraduationCap } from 'lucide-react';
const Partners = () => {
  const partnerCategories = [{
    title: 'Government Partnerships',
    icon: <Building2 className="w-8 h-8 text-red-600" />,
    description: 'Working with government agencies to create sustainable economic opportunities',
    partners: [{
      name: 'Department of Social Welfare',
      description: 'Identifying and supporting candidates for our microfranchise program',
      logo: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }, {
      name: 'Local Government Initiatives',
      description: 'Collaborating on community development programs',
      logo: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }]
  }, {
    title: 'NGO Collaborations',
    icon: <Users2 className="w-8 h-8 text-red-600" />,
    description: 'Partnering with organizations focused on social innovation and sustainability',
    partners: [{
      name: 'Biji-biji Initiative',
      description: 'Promoting environmental sustainability in our operations',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }, {
      name: 'GreenTech Malaysia',
      description: 'Implementing eco-friendly business practices',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
    }]
  }, {
    title: 'Financial Institutions',
    icon: <Wallet className="w-8 h-8 text-red-600" />,
    description: 'Supporting business growth through financial partnerships',
    partners: [{
      name: 'CIMB Foundation',
      description: 'Supporting our disabled community initiatives',
      logo: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }, {
      name: 'Local Financial Partners',
      description: 'Providing financial resources for expansion',
      logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }]
  }, {
    title: 'Educational Partners',
    icon: <GraduationCap className="w-8 h-8 text-red-600" />,
    description: 'Building skills and knowledge through education',
    partners: [{
      name: 'Training Institutions',
      description: 'Providing skill development and training programs',
      logo: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }, {
      name: 'Edunation',
      description: 'Supporting educational initiatives in our community',
      logo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    }]
  }];
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25 z-10"></div>
        <div className="relative h-[40vh] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      }}>
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Partners
              </h1>
              <p className="text-lg md:text-xl text-white">
                Building a stronger community through strategic partnerships
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with various organizations to maximize our social
              impact and create sustainable opportunities within our community.
            </p>
          </div>
          <div className="space-y-16">
            {partnerCategories.map((category, index) => <div key={index} className="border-b border-gray-200 pb-16 last:border-b-0">
                <div className="flex items-center gap-4 mb-8">
                  {category.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.partners.map((partner, pIndex) => <div key={pIndex} className="bg-gray-50 rounded-lg overflow-hidden">
                      <div className="h-48 overflow-hidden">
                        <img src={partner.logo} alt={partner.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {partner.name}
                        </h4>
                        <p className="text-gray-600">{partner.description}</p>
                      </div>
                    </div>)}
                </div>
              </div>)}
          </div>
          {/* SDG Alignment */}
          <div className="mt-16 bg-red-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              UN Sustainable Development Goals
            </h3>
            <p className="text-gray-700 mb-6">
              Our partnerships align with and support the United Nations'
              Sustainable Development Goals, particularly:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Goal 08
                </h4>
                <p className="text-gray-600">
                  Decent work and economic growth through our microfranchise
                  program and community initiatives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Goal 09
                </h4>
                <p className="text-gray-600">
                  Industry, Innovation and Infrastructure through sustainable
                  business practices and community development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Partners;