export default {
  expo: {
    name: "kurdcars-app",
    slug: "kurdcars-app",
    version: "1.0.0",
    orientation: "portrait",
    owner: "rebaz",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    updates: {
      fallbackToCacheTimeout: 0,
      enabled: true,
      url: "https://u.expo.dev/47b1733c-d878-4179-b81d-fe3e21a8cd8b",
    },
    icon: "./assets/logo.png",
    userInterfaceStyle: "light",
    assetBundlePatterns: ["**/*"],
    runtimeVersion: {
      policy: "sdkVersion",
    },
    plugins: [["expo-font"]],
    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#736fae",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.rebaz.kurdcars",
      icon: "./assets/logo.png",
      config: {
        usesNonExemptEncryption: false,
      },
    },
    android: {
      package: "com.rebaz.kurdcars",
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#736fae",
      },
      versionCode: 1,
    },
    web: {
      favicon: "./assets/logo.png",
    },
    extra: {
      SENTRY_DNS:
        "https://4af94f88abb77f1350d99fd420c9152a@o1240332.ingest.us.sentry.io/4507883193434112",
      eas: {
        projectId: "47b1733c-d878-4179-b81d-fe3e21a8cd8b",
      },
    },
  },
};
