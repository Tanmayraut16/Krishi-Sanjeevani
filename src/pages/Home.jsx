import { ArrowRight, Leaf, Shield, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: 'Early Detection',
      description:
        'Identify crop diseases in their early stages to prevent widespread damage.',
    },
    {
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: 'Multiple Crop Support',
      description:
        'Advanced AI model trained to recognize diseases across various crop types.',
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: 'Expert Community',
      description:
        'Connect with agricultural experts and fellow farmers for advice and support.',
    },
  ];

  return (
    <div className='flex-1'>
      <div
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")',
        }}
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Protect Your Crops with AI-Powered Disease Detection
            </h1>
            <p className='text-xl text-gray-200 mb-8'>
              Krishi Sanjeevani empowers farmers with AI-powered crop disease detection
              for better yields and sustainable agriculture.
            </p>
            <div className='flex flex-wrap gap-4'>
              <Link
                to='/detect'
                className='inline-flex items-center px-6 py-3 rounded-lg bg-green-600 text-white'
              >
                Start Detection
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>

              <Link
                to='/resources'
                className='inline-flex items-center px-6 py-3 rounded-lg bg-white text-green-600'
              >
                Learn More
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Krishi Sanjeevani?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Krishi Sanjeevani empowers farmers with AI-powered crop disease
              detection for better yields and sustainable agriculture. Our advanced AI
              model has been trained to recognize diseases across various crop types,
              helping farmers monitor their crops for early detection and prevent
              widespread damage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-block p-3 bg-green-50 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to protect your crops?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers who trust CropGuard AI for early disease detection.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-green-600 font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home