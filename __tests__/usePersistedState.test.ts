import { renderHook } from '@testing-library/react-hooks';
import usePersistedState from '../src/hooks/usePersistedState';

// Fully mock AsyncStorage without custom mock functions
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe('usePersistedState', () => {
  it('renders without crashing', () => {
    const { result } = renderHook(() =>
      usePersistedState('someKey', 'default')
    );
    expect(result.current[0]).toBe('default');
  });
});
