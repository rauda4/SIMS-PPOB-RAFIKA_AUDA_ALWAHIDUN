import React, { useState } from 'react';
import logo from '../../assets/WebsiteAssets/Logo.png';
import { PiListBold } from 'react-icons/pi';

// import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  //   const navigate = useNavigate();

  return (
    <div>
      <nav
        className={'w-full flex items-center justify-between py-3 border-b-2'}>
        <div className='container mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-end px-10'>
            <a
              className='text-black text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase flex gap-2'
              href='/'>
              <img
                src={logo}
                style={{ height: 20, width: 20 }}
                alt='logo'
                className='mt-1'
              />
              SIMS PPOB
            </a>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className='text-black'>
                <PiListBold />
              </i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-none items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-none' : ' hidden')
            }
            id='example-navbar-warning'>
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-red-500 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold'
                  href='/top-up'>
                  Top Up
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-red-500 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold'
                  href='/transaction-history'>
                  Transaction
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-red-500 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold'
                  href='/profile'>
                  Akun
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
