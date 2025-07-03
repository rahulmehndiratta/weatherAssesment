import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import { toggleTheme } from '../redux/themeSlice';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const ThemeToggle: React.FC = () => {
  const mode = useTypedSelector((state) => state.theme.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.row}>
      <Text style={styles.icon}>{mode === 'dark' ? '🌙' : '☀️'}</Text>
      <Switch
        value={mode === 'dark'}
        onValueChange={() => { dispatch(toggleTheme()); }}
        thumbColor={mode === 'dark' ? '#4F8EF7' : '#FFD700'}
        trackColor={{ false: '#b3d1f7', true: '#23262F' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 18,
  },
  icon: {
    fontSize: 22,
    marginRight: 8,
  },
});

export default ThemeToggle; 