import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.icon}>😕</Text>
    <View style={styles.textBlock}>
      <Text style={styles.title}>Oops! Something went wrong</Text>
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.suggestion}>Please check the city name or your internet connection and try again.</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 12,
    backgroundColor: '#FFF3F3',
    borderRadius: 10,
    paddingVertical: 12,
    shadowColor: '#D7263D',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  icon: {
    fontSize: 32,
    marginRight: 14,
    marginTop: 2,
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#D7263D',
    marginBottom: 2,
  },
  text: {
    color: '#D7263D',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 2,
  },
  suggestion: {
    color: '#888',
    fontSize: 13,
    marginTop: 2,
  },
});

export default ErrorMessage; 