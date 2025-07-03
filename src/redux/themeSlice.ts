import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

function getDefaultTheme(): ThemeMode {
  const hour = new Date().getHours();
  return hour >= 6 && hour < 18 ? 'light' : 'dark';
}

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: getDefaultTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer; 