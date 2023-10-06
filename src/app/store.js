import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '../feature/auth/authSlice';
import ProfileSlice from '../feature/profile/ProfileSlice';
import ServiceSlice from '../feature/service/ServiceSlice';
import TransactionSlice from '../feature/transaction/TransactionSlice';

export const store = configureStore({
  reducer: combineReducers({
    auth: authSlice,
    service: ServiceSlice,
    transaction: TransactionSlice,
    profile: ProfileSlice
  })
});
