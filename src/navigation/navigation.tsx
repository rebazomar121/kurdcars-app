import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar, View } from "react-native"
import { fontLoader } from "@helpers/utils/loadingFiles"
import { I18nManager } from "react-native"
import { i18n } from "@helpers/utils/lang"
import * as Updates from "expo-updates"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { GENERAL_CONSTANTS } from "@src/constants/general.const"
import AuthScreens from "./authScreens"


const Navigation = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  // load require files like
  useEffect(() => {
    fontLoader({ setFontsLoaded })
    const defaultDirection = async () => {
      let lang = await AsyncStorage.getItem(GENERAL_CONSTANTS.STORAGE_LANG)
      if (!lang) {
        await AsyncStorage.setItem(
          GENERAL_CONSTANTS.STORAGE_LANG,
          GENERAL_CONSTANTS.LANG_OBJECT.EN
        )
        i18n.changeLanguage(GENERAL_CONSTANTS.LANG_OBJECT.EN)
        I18nManager.forceRTL(true)
        await Updates.reloadAsync()
      }
    }
    defaultDirection()
  }, [])

  if (!fontsLoaded) return <></>

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle={"light-content"} backgroundColor={"#fff"} />
      <NavigationContainer>
        <AuthScreens />
      </NavigationContainer>
    </View>
  )
}

export default Navigation
