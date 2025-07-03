import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function usePersistedState<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(initialValue);

  useEffect(() => {
    AsyncStorage.getItem(key).then((storedValue) => {
      console.log(`[usePersistedState] Loaded for key '${key}':`, storedValue);
      if (storedValue !== null) {
        setState(JSON.parse(storedValue));
      }
    });
  }, [key]);

  const setPersistedState = (value: T) => {
    setState(value);
    AsyncStorage.setItem(key, JSON.stringify(value)).then(() => {
      console.log(`[usePersistedState] Saved for key '${key}':`, value);
    });
  };

  return [state, setPersistedState];
}

export default usePersistedState; 