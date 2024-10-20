import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  });

  return { store };
};

export default makeStore;
