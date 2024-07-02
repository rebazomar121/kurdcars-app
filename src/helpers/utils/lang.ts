import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import arabic from "./languages/arabic.json"
import english from "./languages/english.json"
import kurdish from "./languages/kurdish.json"
import { GENERAL_CONSTANTS } from "@constants/general.const"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { I18nManager } from "react-native"
import * as Updates from "expo-updates"

AsyncStorage.getItem(GENERAL_CONSTANTS.STORAGE_LANG).then((value) => {
  if (value) {
    i18n.changeLanguage(value)
  }
})

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: english,
    },
    ar: {
      translation: arabic,
    },
    ku: {
      translation: kurdish,
    },
  },
  interpolation: {
    skipOnVariables: false,
    escapeValue: false,
  },
})

const langChanger = async (language: string) => {
  try {
    await i18n.changeLanguage(language)
    await AsyncStorage.setItem(GENERAL_CONSTANTS.STORAGE_LANG, language)
    const isRTL = language !== "en"
    await I18nManager.allowRTL(isRTL)
    await I18nManager.forceRTL(isRTL)
    await Updates.reloadAsync()
  } catch (error: any) {}
}

const getCurrentLang = () => {
  return i18n.language
}

export { i18n, langChanger, getCurrentLang }
