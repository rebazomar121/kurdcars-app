# react-native-expo-pro

## Overview

This is a React Native project bootstrapped with Expo. It is a template for a React Native project that includes a number of common libraries and tools that are useful for building a production-ready app.

## Prerequisites

List any prerequisites needed to run your project (e.g., Node.js, npm/yarn, Expo CLI).

## Requisites

- [Node.js](https://nodejs.org/en/download)
- npm or yarn (npm is included with Node.js)
- Expo CLI (install with `npm install -g expo-cli`)
- **For iOS Development:**
  - [Xcode](https://developer.apple.com/xcode/resources/)
  - Latest version of CoreSimulator (included with Xcode)
  - [CocoaPods](https://formulae.brew.sh/formula/cocoapods)
- **For Android Development:**
  - [Android Studio](https://developer.android.com/studio?gad_source=1&gclid=Cj0KCQjwir2xBhC_ARIsAMTXk87QHQuahHvReUryoXzPLqztsPDbay-J8ydxFxVGxeC0bcAd2nA8pSMaAo4gEALw_wcB&gclsrc=aw.ds)
  - [Android SDK Java SDK 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

## Installation

1. **Clone the repository**

```bash
git clone --depth=1 https://github.com/rebazomar121/react-native-expo-pro-tempalte your-project-name
cd your-project-name
```

2. **Install dependencies**

```bash
yarn install
```

3. **Start the development server**

```bash
npx expo start -c --go
```

## Features

- **Navigation**: [React Navigation](https://reactnavigation.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **API Requests**: [Axios](https://axios-http.com/)
- **UI Toolkit**: [Tailwind CSS](https://tailwindcss.com/)
- **Localization**: [i18next](https://www.i18next.com/)
- **Push Notifications**: [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- **Deep Linking**: [React Navigation Deep Linking](https://reactnavigation.org/docs/deep-linking/)

## Building Preview App

```bash
eas build:configure
```

## Building Preview App For IOS

```bash
eas build --platform ios --profile preview --local --clear-cache
```

## Building Preview App For Android

```bash
eas build --platform android --profile preview --local --clear-cache
```

## Building Production App For IOS

```bash
eas build --platform ios --profile production --local --clear-cache
```

## Building Production App For Android

```bash
eas build --platform android --profile production --local --clear-cache
```


## License

This project is open source and available under the [MIT License](LICENSE).

[Rebaz Dev]: https://www.rebaz.dev
[Rebaz Omar]: (https://github.com/rebazomar121)