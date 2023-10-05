import React from 'react';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import { Route, Routes } from 'react-router-dom';

export default function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/*'
          element={<Login />}
        />{' '}
      </Routes>
    </>
  );
}
