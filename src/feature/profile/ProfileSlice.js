import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProfile = createAsyncThunk('getProfile', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    'https://take-home-test-api.nutech-integrasi.app/profile',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data.data;
});

export const updateProfile = createAsyncThunk(
  'updateProfile',
  async ({ first_name, last_name }) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(
      'https://take-home-test-api.nutech-integrasi.app/profile/update',
      { first_name, last_name },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(response);
    return response.data.data;
  }
);

export const updateImage = createAsyncThunk(
  'updateImage',
  async ({ profile_image }) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(
      'https://take-home-test-api.nutech-integrasi.app/profile/image',
      { profile_image },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log(response);
    return response.data.data;
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState: { profile: [] },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(updateImage.fulfilled, (state, action) => {
        state.profile = action.payload;
      });
  }
});

export default profileSlice.reducer;
