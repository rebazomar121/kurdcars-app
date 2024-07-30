import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar, View } from "react-native"
import { fontLoader } from "@helpers/utils/loadingFiles"
import { I18nManager } from "react-native"
import { i18n } from "@helpers/utils/lang"
import * as Updates from "expo-updates"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { GENERAL_CONSTANTS } from "@src/constants/general.const"
import AuthScreens from "./authScreens"
import NetInfo from "@react-native-community/netinfo"
import NetworkLost from "@components/layout/NetworkLost"
import ChooseLang from "@components/layout/ChooseLang"

const Navigation = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [isConnected, setIsConnected] = useState<any>(true)
  const [isFirstTime, setIsFirstTime] = useState(true)

  // load require files
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
    const checkIsFirstTime = async () => {
      let firstTime = await AsyncStorage.getItem(GENERAL_CONSTANTS.FIRST_TIME)
      if (firstTime) setIsFirstTime(false)
      else setIsFirstTime(true)
    }
    checkIsFirstTime()
    defaultDirection()
    const unsubscribe: any = NetInfo.addEventListener((state) => {
      return setIsConnected(state.isConnected)
    })

    return () => unsubscribe()
  }, [])

  if (!fontsLoaded) return <></>

  if (isFirstTime)
    return (
      <ChooseLang
        onEnd={() => {
          setIsFirstTime(false)
        }}
      />
    )

  if (!isConnected) return <NetworkLost />

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
