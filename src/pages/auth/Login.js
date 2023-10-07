import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/utils/Spinner';
import AlertError from '../../components/utils/AlerError';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import logo from '../../assets/WebsiteAssets/Logo.png';
import ilustrasiLogin from '../../assets/WebsiteAssets/IllustrasiLogin.png';
import { login, reset } from '../../feature/auth/authSlice';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      setError(message);
    }
    if (isSuccess) {
      navigate('/');
      window.location.reload();
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

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
      password
    };
    dispatch(login(userData));
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
                  Masuk atau buat akun
                  <p> untuk memulai</p>
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
                    type={showPassword ? 'text' : 'password'}
                    placeholder='masukkan password anda'
                    className='input input-bordered mt-2 rounded-md'
                    name='password'
                    value={password}
                    onChange={onChange}
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className='cursor-pointer absolute mt-10 md:ml-80 ml-72 px-6 show-password'>
                    {showPassword ? <BsEye /> : <BsEyeSlash />}
                  </div>
                </div>
                <div className='form-control mt-4'>
                  <button className='btn bg-red-600 hover:bg-red-800 text-white rounded-md'>
                    Login
                  </button>
                </div>
                <p className='text-sm text-center mt-2 '>
                  belum punya akun? registrasi{' '}
                  <a
                    href='/auth/register'
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
