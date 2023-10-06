import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBalance = createAsyncThunk('getBalance', async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(
    'https://take-home-test-api.nutech-integrasi.app/balance',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data.data;
});

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: { balance: {} },
  extraReducers: (builder) => {
    builder.addCase(getBalance.fulfilled, (state, action) => {
      state.balance = action.payload;
    });
  }
});

export default transactionSlice.reducer;
