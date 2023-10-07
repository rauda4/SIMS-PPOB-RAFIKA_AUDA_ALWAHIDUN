import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProfile = createAsyncThunk('getProfile', async () => {
  try {
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
  } catch (error) {
    return error.response.data.message;
  }
});

export const updateProfile = createAsyncThunk(
  'updateProfile',
  async ({ first_name, last_name }) => {
    try {
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
      return response.data.data;
    } catch (error) {
      return error.response.data.message;
    }
  }
);

export const updateImage = createAsyncThunk('updateImage', async (file) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(
      'https://take-home-test-api.nutech-integrasi.app/profile/image',
      file,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response.data.data;
  } catch (error) {
    return error.response.data.message;
  }
});

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
