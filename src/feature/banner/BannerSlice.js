import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

const bannerSlice = createSlice({
  name: 'banner',
  initialState: { banner: [] },
  extraReducers: (builder) => {
    builder.addCase(getBanner.fulfilled, (state, action) => {
      state.banner = action.payload;
    });
  }
});

export default bannerSlice.reducer;
