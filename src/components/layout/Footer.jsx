import React from 'react'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Krishi Sanjeevani</h3>
            <p className="text-sm">
              Empowering farmers with AI-powered crop disease detection for better
              yields and sustainable agriculture.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/detect" className="text-sm hover:text-green-400">
                  Disease Detection
                </a>
              </li>
              <li>
                <a href="/resources" className="text-sm hover:text-green-400">
                  Resources
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-sm hover:text-green-400">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">krishi_sanjeevani@mail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">79465494323</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, cum.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Krishi Sanjevaani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer