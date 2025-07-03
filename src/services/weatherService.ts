import axios from 'axios';
import type { WeatherResponse } from '../utils/weatherTypes';

const API_KEY = '522db6a157a748e2996212343221502'; // 🔐 Replace with your key
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json';

export const fetchWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const response = await axios.get(`${BASE_URL}?q=${city}&key=${API_KEY}&days=7&aqi=no&alerts=no`);
  return response.data;
};
