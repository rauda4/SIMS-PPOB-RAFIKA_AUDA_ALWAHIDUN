import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  //   const navigate = useNavigate();

  return (
    <div>
      <nav
        className={
          'absolute z-50 w-full flex items-center justify-between px-2 py-3 '
        }>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-end'>
            <a
              className='text-black text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
              href='/'>
              SIMS PPOB
            </a>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className='text-white'>=</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-none items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
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
                  href='/transaction'>
                  Transaction
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-red-500 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs capitalize font-bold'
                  href='/profile'>
                  profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
