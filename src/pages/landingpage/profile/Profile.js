import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar';
import { getProfile } from '../../../feature/profile/ProfileSlice';
import ProfilePic from '../../../assets/WebsiteAssets/ProfilePhoto.png';

export default function Profile() {
  const [showProfile, setShowProfile] = useState();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);

  useEffect(() => {
    dispatch(getProfile());
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

  const handleLogout = () => {
    // Perform logout action
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Navbar transparent />
      <div className='py-28 '>
        <div className='flex justify-center'>
          <img
            src={showProfile}
            style={{ height: 80, width: 80 }}
            alt='profilepic'
          />
        </div>
        <div className='font-bold text-2xl justify-center capitalize flex gap-2 py-4'>
          <span>{profile.first_name}</span>
          <span>{profile.last_name}</span>
        </div>

        {/* body field update */}
        <div className='2xl:px-96 lg:px-40 px-20'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text capitalize font-semibold'>email</span>
            </label>
            <input
              type='text'
              placeholder='masukkan email anda'
              className='input input-bordered rounded-md font-semibold'
              name='email'
              value={profile.email}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text capitalize font-semibold'>
                nama depan
              </span>
            </label>
            <input
              type='text'
              placeholder='masukkan email anda'
              className='input input-bordered rounded-md font-semibold'
              name='first_name'
              value={profile.first_name}
            />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text capitalize font-semibold'>
                nama belakang
              </span>
            </label>
            <input
              type='text'
              className='input input-bordered rounded-md font-semibold'
              name='last'
              value={profile.last_name}
            />
          </div>
          <div className='form-control mt-4'>
            <a
              href='/edit-profile'
              className='btn bg-white border border-red-800 hover:border-red-800 hover:bg-red-100 text-red-600 rounded-md capitalize'>
              Edit
            </a>
          </div>
          <div className='form-control mt-4 '>
            <button
              className='btn bg-red-600 hover:bg-red-800 text-white rounded-md capitalize'
              onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
