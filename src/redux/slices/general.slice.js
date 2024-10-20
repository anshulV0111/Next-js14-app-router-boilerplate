import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
  isChatOpen: false,
};

export const generalSlice = createSlice({
  name: 'generalSlice',
  initialState,
  reducers: {
    setIsSidebarOpen: (state, { payload }) => ({
      ...state,
      isSidebarOpen: payload,
    }),
    setShowChat: (state, { payload }) => ({
      ...state,
      isChatOpen: payload,
    }),
  },
});

export const {
  setIsSidebarOpen,
  setShowChat,
} = generalSlice.actions;
export default generalSlice.reducer;
