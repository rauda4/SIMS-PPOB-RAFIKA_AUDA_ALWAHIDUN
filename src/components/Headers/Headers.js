import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfilePic from '../../assets/WebsiteAssets/ProfilePhoto.png';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { getProfile } from '../../feature/profile/ProfileSlice';
import { getBalance } from '../../feature/transaction/TransactionSlice';

export default function Headers() {
  const [showSaldo, setShowSaldo] = useState(false);
  const [showProfile, setShowProfile] = useState();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const balance = useSelector((state) => state.transaction.balance);

  useEffect(() => {
    dispatch(getProfile(), dispatch(getBalance()));
  }, [dispatch]);

  useEffect(() => {
    if (
      profile.profile_image ===
      'https://minio.nutech-integrasi.app/take-home-test/null'
    ) {
      setShowProfile(ProfilePic);
    } else {
      setShowProfile(profile.profile_image);
    }
  }, [profile.profile_image]);

  return (
    <>
      <section className='py-16 2xl:px-48 sm:px-20'>
        <div className='grid sm:grid-cols-2 justify-center'>
          {/* card profile */}
          <div className=''>
            <div className='sm:ml-10 py-4'>
              <img
                src={showProfile}
                style={{ height: 80, width: 80 }}
                alt='profilepic'
              />
              <div className='mt-4'>Selamat datang</div>
              <div className='font-bold text-2xl capitalize flex gap-2'>
                <span>{profile.first_name}</span>
                <span>{profile.last_name}</span>
              </div>
            </div>
          </div>

          {/* card saldo */}
          <div className='flex items-center'>
            <div className='card sm:w-full w-96 md:h-32 focus:bg-sky-800 text-white bg-red-600  rounded-md p-4 2xl:mr-8 space-y-3'>
              <span className='text-sm'>Saldo anda</span>
              <span className='text-2xl'>
                {showSaldo ? (
                  <div>
                    {(balance.balance || 0).toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      maximumFractionDigits: 0,
                      minimumFractionDigits: 0
                    })}
                  </div>
                ) : (
                  <div>Rp ••••••••</div>
                )}
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
