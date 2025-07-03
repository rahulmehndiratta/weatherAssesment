import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    theme: themeReducer,
  },
});

// Optional: Add these exports for useSelector & useDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
