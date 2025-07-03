import React, { type ReactElement } from 'react';
import { Provider } from 'react-redux';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';

function App(): ReactElement {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
