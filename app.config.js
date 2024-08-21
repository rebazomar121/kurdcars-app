export default {
  expo: {
    name: "kurdcars-app",
    slug: "kurdcars-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#736fae",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#736fae",
      },
    },
    web: {
      favicon: "./assets/logo.png",
    },
    extra: {
      SENTRY_DNS: "your-sentry-dns",
    },
  },
};
