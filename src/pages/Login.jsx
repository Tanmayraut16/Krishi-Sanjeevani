import React from 'react'
import { Link } from 'react-router-dom'
import { LogIn, Mail, Lock } from 'lucide-react';


const Login = () => {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 bg-white p-10 rounded-md shadow-xl'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Welcome Back
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Don't have an account?{' '}
            <Link
              to="/signup"
              className='font-medium text-green-600 hover:text-green-500'
            >
              Sign up
            </Link>
          </p>
        </div>


        <form className='mt-8 space-y-6'>
          <div className='rounded-md shadow-sm space-y-4'>
            <div>
              <label htmlFor="email" className='sr-only'>
                Email address
              </label>
              <div className='relative'>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className='sr-only'>
                Password
              </label>
              <div className='relative'>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-green-500 group-hover:text-green-400" />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login