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
export const getTopUp = createAsyncThunk('getTopUp', async (top_up_amount) => {
  const token = localStorage.getItem('token');
  const response = await axios.post(
    'https://take-home-test-api.nutech-integrasi.app/topup',
    top_up_amount,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data.data;
});

export const getHistoryOrder = createAsyncThunk(
  'getHistoryOrder',
  async (limit) => {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `https://take-home-test-api.nutech-integrasi.app/transaction/history?offset=0&limit=${limit}
    `,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data.data.records;
  }
);

export const paymentOrder = createAsyncThunk(
  'paymentOrder',
  async (service_code) => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      'https://take-home-test-api.nutech-integrasi.app/transaction',
      service_code,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data.data;
  }
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: { balance: {}, TopUp: {}, order: {}, historyOrder: [] },
  extraReducers: (builder) => {
    builder
      .addCase(getBalance.fulfilled, (state, action) => {
        state.balance = action.payload;
      })
      .addCase(getTopUp.fulfilled, (state, action) => {
        state.balance = action.payload;
      })
      .addCase(paymentOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(getHistoryOrder.fulfilled, (state, action) => {
        state.historyOrder = action.payload;
      });
  }
});

export default transactionSlice.reducer;
