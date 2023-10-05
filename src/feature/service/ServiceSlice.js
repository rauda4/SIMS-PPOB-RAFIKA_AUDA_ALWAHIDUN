import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getService = createAsyncThunk('getService', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    'https://take-home-test-api.nutech-integrasi.app/services',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data.data;
});

export const getBanner = createAsyncThunk('getBanner', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    'https://take-home-test-api.nutech-integrasi.app/banner',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data.data;
});

const serviceSlice = createSlice({
  name: 'service',
  initialState: { service: [], banner: [] },
  extraReducers: (builder) => {
    builder.addCase(getService.fulfilled, (state, action) => {
      state.service = action.payload;
    });
  }
});

export default serviceSlice.reducer;
