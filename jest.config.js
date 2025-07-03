module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|react-clone-referenced-element' +
      '|react-redux' +
      '|@react-navigation' +
      '|@react-native-async-storage' +
      ')/)',
  ],
  setupFiles: ['./jest.setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
