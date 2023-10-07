import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getService = createAsyncThunk('getService', async () => {
  try {
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
  } catch (error) {
    return error.response.data.message;
  }
});

export const getBanner = createAsyncThunk('getBanner', async () => {
  try {
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
  } catch (error) {
    return error.response.data.message;
  }
});

const serviceSlice = createSlice({
  name: 'service',
  initialState: { service: [], banner: [] },
  extraReducers: (builder) => {
    builder
      .addCase(getService.fulfilled, (state, action) => {
        state.service = action.payload;
      })
      .addCase(getBanner.fulfilled, (state, action) => {
        state.banner = action.payload;
      });
  }
});

export default serviceSlice.reducer;
