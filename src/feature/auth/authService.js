import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Register user
const register = async (userData) => {
  const response = await axios.post(
    'https://take-home-test-api.nutech-integrasi.app/registration',
    userData
  );
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(
    'https://take-home-test-api.nutech-integrasi.app/login',
    userData
  );
  const accesToken = response.data.data.token;
  if (response.data.status === 0) {
    localStorage.setItem('token', accesToken);
    const userAccount = jwtDecode(accesToken);
    localStorage.setItem('member_kode', userAccount.memberCode);
    localStorage.setItem('email', userAccount.email);
  }

  return response.data;
};

const authService = {
  register,
  login
};
export default authService;
