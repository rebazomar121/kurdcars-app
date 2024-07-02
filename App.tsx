import * as Sentry from "@sentry/react-native";
import Constants from "expo-constants";
import App from "./src/index";

const SENTRY_DSN = Constants?.expoConfig?.extra?.SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
});

export default Sentry.wrap(App);