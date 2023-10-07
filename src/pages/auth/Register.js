import React, { useEffect, useState } from 'react';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import logo from '../../assets/WebsiteAssets/Logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AlertError from '../../components/utils/AlerError';
import Spinner from '../../components/utils/Spinner';
import ilustrasiLogin from '../../assets/WebsiteAssets/IllustrasiLogin.png';
import { register, reset } from '../../feature/auth/authSlice';

export default function Register() {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: ''
  });

  const { email, first_name, last_name, password, confirm_password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    document.title = 'Register';
    if (isError) {
      setError(message);
    }
    if (isSuccess || user) {
      navigate('/auth/login');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      first_name,
      last_name,
      password
    };
    await dispatch(register(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className='hero min-h-screen '>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='grid md:grid-cols-2 gap-10 items-center'>
          <div className='card flex-shrink-0 md:w-screen max-w-md bg-base-100'>
            <div className='card-body my-5'>
              {/* headers */}
              <div>
                <div className='justify-center py-8 flex space-x-2'>
                  <img
                    src={logo}
                    style={{ height: 30, width: 30 }}
                    alt='logo'
                  />
                  <div className='font-bold'>SIMS PPOB</div>
                </div>
                <div className='text-center text-3xl font-bold pb-5'>
                  Lengkapi data untuk
                  <p> membuat akun</p>
                </div>
              </div>
              {error && <AlertError message={error} />}
              <form onSubmit={handleSubmit}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'></span>
                  </label>
                  <input
                    type='text'
                    placeholder='masukkan email anda'
                    className='input input-bordered rounded-md'
                    name='email'
                    value={email}
                    onChange={onChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'></span>
                  </label>
                  <input
                    type='text'
                    placeholder='nama depan'
                    className='input input-bordered rounded-md'
                    name='first_name'
                    value={first_name}
                    onChange={onChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'></span>
                  </label>
                  <input
                    type='text'
                    placeholder='nama belakang'
                    className='input input-bordered rounded-md'
                    name='last_name'
                    value={last_name}
                    onChange={onChange}
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'></span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='buat password'
                    className='input input-bordered mt-2 rounded-md'
                    name='password'
                    value={password}
                    onChange={onChange}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className='cursor-pointer absolute mt-10 md:ml-80 ml-56 px-6 show-password'>
                    {showPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'></span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='konfirmasi password'
                    className='input input-bordered mt-2 rounded-md'
                    name='confirm_password'
                    value={confirm_password}
                    onChange={onChange}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className='cursor-pointer absolute mt-10 md:ml-80 ml-56 px-6 show-password'>
                    {showPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
                <div className='form-control mt-4'>
                  <button className='btn bg-red-600 hover:bg-red-800 text-white rounded-md'>
                    Login
                  </button>
                </div>
                <p className='text-sm text-center mt-2 '>
                  sudah punya akun? login{' '}
                  <a
                    href='/auth/login'
                    className='text-red-600 font-bold'>
                    disini
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div>
            <img
              src={ilustrasiLogin}
              alt='logo'
              className='md:w-full w-0'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
