import React from 'react';
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function AuthRoutes() {
  return (
    <>
      <Routes>
        <Route
          path='/auth/register'
          element={<Register />}
        />
        <Route
          path='/auth/login'
          element={<Login />}
        />
        <Route
          path='/*'
          element={<Login />}
        />
      </Routes>
    </>
  );
}
