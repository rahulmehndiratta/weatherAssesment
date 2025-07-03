// jest.setup.js

// Safe mock for AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
  );
  
  // Conditionally mock NativeAnimatedHelper if it exists (older React Native)
  try {
    jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
  } catch (e) {
    // It's fine — module doesn't exist in RN 0.72+
  }
  