import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import { getWeather, resetWeather } from '../redux/weatherSlice';
import type { WeatherResponse } from '../utils/weatherTypes';
import ErrorMessage from '../components/ErrorMessage';
import usePersistedState from '../hooks/usePersistedState';
import ThemeToggle from '../components/ThemeToggle';
import { lightColors, darkColors } from '../theme/colors';

interface LastWeather {
  city: string;
  temp: number;
  icon: string;
  type: string;
}

const HomeScreen: React.FC = () => {
  const [lastWeather, setLastWeather] = usePersistedState<LastWeather | null>('lastWeather', null);
  const [cityInput, setCityInput] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.weather);
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const colors = themeMode === 'dark' ? darkColors : lightColors;

  useEffect(() => {
    if (lastWeather) {
      setCityInput(lastWeather.city);
      // Don't auto-fetch from API, just show local card
    }
  }, []);

  const handleSearch = () => {
    if (cityInput.trim() === '') return;
    dispatch(getWeather(cityInput.trim()));
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (data && data.location && data.current) {
      setLastWeather({
        city: data.location.name,
        temp: Math.round(data.current.temp_c),
        icon: data.current.condition.icon,
        type: data.current.condition.text,
      });
    }
  }, [data]);

  const handleClear = () => {
    setCityInput('');
    setLastWeather(null);
    dispatch(resetWeather());
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={{ alignItems: 'flex-end' }}>
        <ThemeToggle />
      </View>
      <Text style={[styles.title, { color: colors.title }]}>🌤️ Weather App</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={[styles.input, { borderColor: colors.inputBorder, backgroundColor: colors.card, color: colors.text }]}
          placeholder="Enter city name"
          value={cityInput}
          onChangeText={setCityInput}
          autoCapitalize="words"
          placeholderTextColor={colors.placeholder}
        />
        {cityInput.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClear} accessibilityLabel="Clear input">
            <Text style={styles.clearButtonText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>

      <TouchableOpacity
        style={[styles.getWeatherButton, cityInput.trim() ? { backgroundColor: colors.button } : styles.getWeatherButtonDisabled]}
        onPress={handleSearch}
        disabled={!cityInput.trim()}
        accessibilityLabel="Get Weather"
      >
        <Text style={[styles.getWeatherButtonText, { color: colors.buttonText }]}>Get Weather</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 20 }} />}

      {error && <ErrorMessage message={error} />}

      {data && !error && (
        <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
          <Text style={[styles.city, { color: colors.text }]}>{data.location?.name}</Text>
          <Text style={[styles.temp, { color: colors.text }]}>{data.current ? Math.round(data.current.temp_c) : '--'}°C</Text>
          <Text style={[styles.condition, { color: colors.text }]}>{data.current?.condition?.text}</Text>
          {data.current?.condition?.icon && (
            <Image
              style={[styles.icon, { tintColor: colors.text }]}
              source={{ uri: `https:${data.current.condition.icon}` }}
            />
          )}
        </View>
      )}

      {!data && !loading && !error && lastWeather && (
        <View style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.shadow }]}>
          <Text style={[styles.city, { color: colors.text }]}>{lastWeather.city}</Text>
          <Text style={[styles.temp, { color: colors.text }]}>{lastWeather.temp}°C</Text>
          <Text style={[styles.condition, { color: colors.text }]}>{lastWeather.type}</Text>
          {lastWeather.icon && (
            <Image
              style={[styles.icon, { tintColor: colors.text }]}
              source={{ uri: `https:${lastWeather.icon}` }}
            />
          )}
          <Text style={[styles.emptyStateText, { color: colors.placeholder }]}>(Last saved)</Text>
        </View>
      )}

      {!data && !loading && !error && !lastWeather && (
        <View style={[styles.emptyState, { backgroundColor: colors.background }]}>
          <Text style={[styles.emptyStateText, { color: colors.placeholder }]}>Search for a city to see the weather!</Text>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 24,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: '#b3d1f7',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#b3d1f7',
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#fff',
    fontSize: 18,
    color: '#222',
    shadowColor: '#b3d1f7',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  clearButton: {
    marginLeft: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  clearButtonText: {
    fontSize: 18,
    color: '#888',
  },
  getWeatherButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  getWeatherButtonDisabled: {
    backgroundColor: '#b3d1f7',
  },
  getWeatherButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  error: {
    color: 'red',
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    marginTop: 30,
    padding: 28,
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#b3d1f7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  city: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 6,
  },
  temp: {
    fontSize: 54,
    fontWeight: '300',
    marginVertical: 10,
    color: '#222',
  },
  condition: {
    fontSize: 22,
    color: '#555',
    marginBottom: 8,
  },
  icon: {
    width: 110,
    height: 110,
    marginTop: 8,
  },
  emptyState: {
    marginTop: 60,
    alignItems: 'center',
  },
  emptyStateText: {
    fontSize: 20,
    color: '#aaa',
    fontStyle: 'italic',
  },
});
