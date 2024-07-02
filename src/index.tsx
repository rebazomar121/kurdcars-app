import React from "react"
import "tailwindcss-react-native/types.d"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { i18n } from "@helpers/utils/lang"
import { I18nextProvider } from "react-i18next"
import Provider from "@context/context"
import Navigation from "@navigation/navigation"

export default function App() {
  return (
    <SafeAreaProvider>
      <I18nextProvider i18n={i18n}>
        <Provider>
          <Navigation />
        </Provider>
      </I18nextProvider>
    </SafeAreaProvider>
  )
}
