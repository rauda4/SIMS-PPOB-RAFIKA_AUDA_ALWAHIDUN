import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/landingpage/home/Home';
import Transaction from '../pages/landingpage/transaction/Transaction';
import Profile from '../pages/landingpage/profile/Profile';
import EditProfile from '../pages/landingpage/profile/EditProfile';
import TopUp from '../pages/landingpage/topup/TopUp';

export default function LandingPageRoutes() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/top-up'
          element={<TopUp />}
        />
        <Route
          path='/transaction'
          element={<Transaction />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/edit-profile'
          element={<EditProfile />}
        />
        <Route
          path='*'
          element={<Navigate to={'/'} />}
        />{' '}
      </Routes>
    </>
  );
}
