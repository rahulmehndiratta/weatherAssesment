import axios from 'axios';
import { WEATHER_API_KEY } from '@env';
import type { WeatherResponse } from '../utils/weatherTypes';

const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

export const fetchWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const response = await axios.get(`${BASE_URL}?q=${city}&key=${WEATHER_API_KEY}&days=7&aqi=no&alerts=no`);
  return response.data;
};
