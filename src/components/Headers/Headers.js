import React, { useState } from 'react';
import ProfilePic from '../../assets/WebsiteAssets/ProfilePhoto.png';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export default function Headers() {
  const [showSaldo, setShowSaldo] = useState(false);

  return (
    <>
      <section className='py-24 2xl:px-48 px-20'>
        <div className='grid sm:grid-cols-2 justify-center'>
          {/* card profile */}
          <div className=''>
            <div className='sm:ml-10 py-4'>
              <img
                src={ProfilePic}
                style={{ height: 80, width: 80 }}
                alt='profilepic'
              />
              <div className='mt-4'>Selamat datang</div>
              <div className='font-bold text-2xl'>Rafika Auda Alwahidun</div>
            </div>
          </div>

          {/* card saldo */}
          <div className='flex items-center'>
            <div className='card sm:w-full w-full md:h-32 focus:bg-sky-800 text-white bg-red-600  rounded-md p-4 space-y-3'>
              <span className='text-sm'>Saldo anda</span>
              <span className='text-2xl'>
                {showSaldo ? <div>Rp 20.000</div> : <div>Rp ••••••••</div>}
              </span>
              <span className='text-sm'>Lihat saldo</span>
            </div>
            <div
              onClick={() => setShowSaldo(!showSaldo)}
              className='cursor-pointer absolute ml-24 mt-20 show-password'>
              {setShowSaldo ? (
                <BsEye className='text-white' />
              ) : (
                <BsEyeSlash className='text-white' />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
