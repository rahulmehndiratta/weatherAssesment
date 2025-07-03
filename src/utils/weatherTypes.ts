export interface WeatherResponse {
  error?: WeatherError;
  location?: Location;
  current?: Current;
  forecast?: Forecast;
}

export interface WeatherError {
  code: number;
  message: string;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Current {
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  condition: Condition;
} 