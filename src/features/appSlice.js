import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './appAPI';

const initialState = {
  channelId: null,
  channelName: null,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'app/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelInfo } = appSlice.actions;

export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;


export default appSlice.reducer;
