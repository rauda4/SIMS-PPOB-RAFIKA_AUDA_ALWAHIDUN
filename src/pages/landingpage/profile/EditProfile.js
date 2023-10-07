import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../../components/Navbar/Navbar';
import ButtonRed from '../../../components/Buttons/ButtonRed';
import {
  getProfile,
  updateImage,
  updateProfile
} from '../../../feature/profile/ProfileSlice';
import ProfilePic from '../../../assets/WebsiteAssets/ProfilePhoto.png';
import { useNavigate } from 'react-router-dom';
import EditImage from './EditImage';

export default function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState();
  const [image, setImage] = useState();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: ''
  });

  const { first_name, last_name } = formData;
  const profile = useSelector((state) => state.profile.profile);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  // handling if user not update image profile
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

    const formData = new FormData();
    formData.append('file', image);
    await dispatch(updateProfile(data));
    await dispatch(updateImage(formData));
    navigate('/profile');
  };
  return (
    <>
      <Navbar transparent />
      <div className='py-28 '>
        <div className='flex justify-center'>
          <div>
            <img
              src={showProfile}
              style={{ height: 80, width: 80 }}
              alt='profilepic'
            />
            {/* Edit Image */}
            <EditImage onChange={(e) => setImage(e.target.files[0])} />
          </div>
        </div>
        <div className='font-bold text-2xl justify-center capitalize flex gap-2 py-4'>
          <span>{profile.first_name}</span>
          <span>{profile.last_name}</span>
        </div>

        {/* from field email, first namae, last name */}
        <div className='2xl:px-96 lg:px-40 px-20 space-y-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text capitalize font-semibold'>email</span>
            </label>
            <input
              type='text'
              className='input input-bordered rounded-md font-semibold'
              name='email'
              value={profile.email || 'email'}
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
              className='input input-bordered rounded-md font-semibold'
              name='first_name'
              value={first_name || 'last_name'}
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
              className='input input-bordered rounded-md font-semibold'
              name='last_name'
              value={last_name || 'last_name'}
              onChange={onChange}
            />
          </div>

          <div className='mt-4 '>
            <ButtonRed
              onClick={handleUpdate}
              title='save'
            />
          </div>
        </div>
      </div>
    </>
  );
}
