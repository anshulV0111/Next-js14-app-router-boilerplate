import { createSlice } from '@reduxjs/toolkit';

const defaultAuthState = {
  loginData: null,
  language: 'en',
  isLoggedIn: false,
  authToken: null,
  settingsData: null,
  allCurrencies: [],
  userData: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState: defaultAuthState,
  reducers: {
    setIsLoggedIn: (state, action) => ({
      ...state,
      isLoggedIn: action?.payload,
    }),
    setSettingsData: (state, action) => ({
      ...state,
      settingsData: action?.payload,
    }),
    setUserData: (state, action) => ({
      ...state,
      userData: action?.payload,
    }),
    setAllCurrenciesData: (state, action) => ({
      ...state,
      allCurrencies: action?.payload,
    }),
    handleLanguageChange: (state, action) => ({
      ...state,
      language: action.payload,
    }),
    setAuthToken: (state, action) => ({
      ...state,
      authToken: action.payload,
    }),
    clearAuthToken: (state) => ({
      ...state,
      authToken: null,
      isLoggedIn: false,
    }),
  },
});

export const {
  handleLanguageChange,
  setIsLoggedIn,
  setAuthToken,
  clearAuthToken,
  setSettingsData,
  setUserData,
  setAllCurrenciesData,
} = authSlice.actions;

export default authSlice.reducer;
