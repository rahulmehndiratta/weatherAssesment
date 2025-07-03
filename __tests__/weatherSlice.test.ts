import reducer, { getWeather } from '../src/redux/weatherSlice';

describe('weatherSlice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual({
      city: '',
      data: null,
      loading: false,
      error: null,
    });
  });

  it('should handle pending', () => {
    const state = reducer(undefined, getWeather.pending('', 'London'));
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fulfilled', () => {
    const payload = {
      location: { name: 'London', region: '', country: '', localtime_epoch: 0, localtime: '' },
      current: { temp_c: 0, temp_f: 0, is_day: 1, condition: { text: '', icon: '', code: 0 } },
      forecast: undefined,
      error: undefined,
    };
    const state = reducer(undefined, getWeather.fulfilled(payload, '', 'London'));
    expect(state.loading).toBe(false);
    expect(state.data).toEqual(payload);
    expect(state.city).toBe('London');
  });

  it('should handle rejected', () => {
    const state = reducer(undefined, getWeather.rejected(new Error('error'), '', 'London', 'City not found'));
    expect(state.loading).toBe(false);
    expect(state.error).toBe('City not found');
  });
}); 