import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteProp } from "@react-navigation/native"

import Home from "@screens/Home"

const screenOptions = {
  headerShown: false,
  animation: "none",
}

export type ParamListBase = {
  Home: undefined
}

export type ScreenRouteProp<ScreenName extends keyof ParamListBase> = RouteProp<
  ParamListBase,
  ScreenName
>

export type NavigationStackList = NativeStackNavigationProp<ParamListBase>

const createScreen = <T>(name: string, component: React.ComponentType<T>) => ({
  name,
  component,
  options: screenOptions,
})

const screens = [createScreen("Home", Home)]

export { screens }
