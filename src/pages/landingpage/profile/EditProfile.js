import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar';
import {
  getProfile,
  updateImage,
  updateProfile
} from '../../../feature/profile/ProfileSlice';
import ProfilePic from '../../../assets/WebsiteAssets/ProfilePhoto.png';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: ''
  });

  const { first_name, last_name } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const profile = useSelector((state) => state.profile.profile);

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

  useEffect(() => {
    if (profile) {
      setFormData(profile);
    }
  }, [profile]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      first_name,
      last_name
    };
    await dispatch(updateProfile(data));
    navigate('/profile');
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
        <form onSubmit={handleUpdate}>
          <div className='2xl:px-96 lg:px-40 px-20'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text capitalize font-semibold'>
                  email
                </span>
              </label>
              <input
                type='text'
                // placeholder={profile.email}
                className='input input-bordered rounded-md font-semibold'
                name='email'
                value={profile.email}
                onChange={onChange}
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
                // placeholder={profile.first_name}
                className='input input-bordered rounded-md font-semibold'
                name='first_name'
                value={first_name}
                onChange={onChange}
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
                // placeholder={profile.last_name}
                className='input input-bordered rounded-md font-semibold'
                name='last_name'
                value={last_name}
                onChange={onChange}
              />
            </div>

            <div className='form-control mt-4 '>
              <button className='btn bg-red-600 hover:bg-red-800 text-white rounded-md capitalize'>
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
