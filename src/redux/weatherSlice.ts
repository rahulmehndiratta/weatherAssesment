import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherByCity } from '../services/weatherService';

interface WeatherState {
  city: string;
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  city: '',
  data: null,
  loading: false,
  error: null,
};

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city: string, thunkAPI) => {
    try {
      const response = await fetchWeatherByCity(city);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message || 'Something went wrong');
    }
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    resetWeather: (state) => {
      state.data = null;
      state.error = null;
      state.city = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getWeather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.city = action.payload.location?.name || '';
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default weatherSlice.reducer;
export const { resetWeather } = weatherSlice.actions;
