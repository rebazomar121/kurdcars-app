import * as Sentry from "@sentry/react-native";
import Constants from "expo-constants";
import App from "./src/index";
import * as SplashScreen from "expo-splash-screen";
const SENTRY_DSN = Constants?.expoConfig?.extra?.SENTRY_DNS;

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  _experiments: {
    profilesSampleRate: 1.0,
  },
});


export default Sentry.wrap(App);
