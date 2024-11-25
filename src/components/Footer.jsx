import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/tac-logo.svg';

const Footer = () => {
  return (
    <footer className='mt-auto shadow-md bg-card'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8 xl:col-span-1'>
            <img className='h-10' src={logo} alt='TapACall' />
            <p className='text-base text-gray-500'>
              Making communication easier, one tap at a time.
            </p>
            <div className='flex space-x-6'>
              {/* Add your social media icons here */}
              {/* Example: */}
              {/* <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a> */}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Solutions
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      to='/'
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/blogs'
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 md:mt-0'>
                <h3 className='text-sm font-semibold tracking-wider text-gray-400 uppercase'>
                  Support
                </h3>
                <ul className='mt-4 space-y-4'>
                  <li>
                    <Link
                      to='/help'
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/terms'
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/privacy'
                      className='text-base text-gray-500 hover:text-gray-900'
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-8 mt-12 border-t border-gray-200'>
          <p className='text-base text-gray-400 xl:text-center'>
            &copy; 2024 TapACall, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
