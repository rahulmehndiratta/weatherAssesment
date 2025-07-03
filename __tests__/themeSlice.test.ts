import themeReducer, { toggleTheme, setTheme, ThemeMode } from '../src/redux/themeSlice';

describe('themeSlice', () => {
  it('should return the initial state', () => {
    const state = themeReducer(undefined, { type: '@@INIT' });
    expect(['light', 'dark']).toContain(state.mode);
  });

  it('should toggle theme', () => {
    let state = { mode: 'light' as ThemeMode };
    state = themeReducer(state, toggleTheme());
    expect(state.mode).toBe('dark');
    state = themeReducer(state, toggleTheme());
    expect(state.mode).toBe('light');
  });

  it('should set theme', () => {
    let state = { mode: 'light' as ThemeMode };
    state = themeReducer(state, setTheme('dark'));
    expect(state.mode).toBe('dark');
    state = themeReducer(state, setTheme('light'));
    expect(state.mode).toBe('light');
  });
}); 