import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '../feature/auth/authSlice';
import BannerSlice from '../feature/banner/BannerSlice';
import ServiceSlice from '../feature/service/ServiceSlice';

export const store = configureStore({
  reducer: combineReducers({
    auth: authSlice,
    service: ServiceSlice,
    banner: BannerSlice
  })
});
