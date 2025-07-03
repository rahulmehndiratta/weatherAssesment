


https://github.com/user-attachments/assets/e9901f22-612c-48bc-91fb-6950646c35df



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

## About
WeatherAssessment is a modern, scalable React Native app that displays current weather and forecast for any city. It features dark/light mode, persistent last search, attractive UI, and robust error handling. The codebase is modular, maintainable, and fully tested.

## Features
- Search weather by city (with error handling)
- Dark/Light mode toggle (auto by time, manual override)
- Last searched city and weather persist across app restarts
- Beautiful, responsive UI for iOS and Android
- Unit tests for all business logic, API, Redux, and hooks

## Setup
1. **Install dependencies:**
   ```sh
   yarn install
   # or
   npm install
   ```
2. **iOS only:**
   ```sh
   cd ios && pod install && cd ..
   ```
3. **Start Metro bundler:**
   ```sh
   npx react-native start
   ```
4. **Run the app:**
   ```sh
   npx react-native run-ios
   # or
   npx react-native run-android
   ```

## Testing
- Run all unit tests:
  ```sh
  yarn test
  # or
  npm test
  ```

## Project Structure
```
WeatherAssessment/
  src/
    components/        # Reusable UI components (ThemeToggle, ErrorMessage, etc.)
    hooks/             # Custom React hooks (usePersistedState, etc.)
    redux/             # Redux slices and store (weatherSlice, themeSlice, store)
    screens/           # App screens (HomeScreen)
    services/          # API calls (weatherService)
    theme/             # Theme and color definitions
    utils/             # TypeScript types and utilities
  __tests__/           # All unit tests for business logic, API, Redux, hooks
  App.tsx              # App entry point
  index.js             # React Native entry point
  jest.config.js       # Jest test configuration
  tsconfig.json        # TypeScript configuration
  README.md            # This file
```

## File/Directory Roles
- **src/components/**: UI components, e.g. `ThemeToggle.tsx` (theme switch), `ErrorMessage.tsx` (user-friendly error display)
- **src/hooks/**: Custom hooks, e.g. `usePersistedState.ts` (persist state with AsyncStorage)
- **src/redux/**: Redux logic:
  - `weatherSlice.ts`: Weather state, async fetch, error handling
  - `themeSlice.ts`: Dark/light mode state
  - `store.ts`: Redux store setup
- **src/screens/**: Main screens, e.g. `HomeScreen.tsx` (search, display, theme, error, persistence)
- **src/services/**: API logic, e.g. `weatherService.ts` (fetches weather from WeatherAPI)
- **src/theme/**: Color palettes for light/dark mode
- **src/utils/**: TypeScript interfaces for API data
- **__tests__/**: All unit tests (API, Redux, hooks, app rendering)
- **App.tsx**: App root, navigation, and provider setup
- **jest.config.js**: Jest test runner config (uses react-native preset)
- **tsconfig.json**: TypeScript config (includes jest types for tests)

## Notes
- All business logic is separated from UI for maintainability.
- API calls are centralized in `services/`.
- State management is isolated in Redux.
- Custom hooks and components promote code reuse.
- Theming is modular and easy to extend.
- Tests use mocks for native modules and API.

---
**For any issues, check the logs, ensure all dependencies are installed, and that your Jest config matches the above.**
