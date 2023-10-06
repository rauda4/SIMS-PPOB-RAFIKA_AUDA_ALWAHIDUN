import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar';
import { getProfile } from '../../../feature/profile/ProfileSlice';
import ProfilePic from '../../../assets/WebsiteAssets/ProfilePhoto.png';
import CardsFormProfile from '../../../components/Cards/CardsFormProfile';
import { MdAlternateEmail, MdOutlineAccountCircle } from 'react-icons/md';
import ButtonRed from '../../../components/Buttons/ButtonRed';
import ButtonWhite from '../../../components/Buttons/ButtonWhite';

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
          <div className='space-y-2'>
            <CardsFormProfile
              tittle='Email'
              icon={<MdAlternateEmail />}
              name={profile.email}
            />
            <CardsFormProfile
              tittle='First Name'
              icon={<MdOutlineAccountCircle />}
              name={profile.first_name}
            />
            <CardsFormProfile
              tittle='Last Name'
              icon={<MdOutlineAccountCircle />}
              name={profile.last_name}
            />
          </div>
          <div className='space-y-3 mt-10'>
            <a href='/edit-profile'>
              <ButtonWhite title='Edit' />
            </a>
            <ButtonRed
              title='logout'
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
}
