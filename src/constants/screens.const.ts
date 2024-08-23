import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import Home from "@screens/Home";
import CarDetails from "@screens/cars/CarDetails";
import SellerProfile from "@screens/profile/SellerProfile";
import CarSell from "@src/screens/cars/CarSell";
import Login from "@screens/auth/Login";

const screenOptions = {
  headerShown: false,
  animation: "slide_from_right",
};

export type ParamListBase = {
  Home: undefined;
};

export type ScreenRouteProp<ScreenName extends keyof ParamListBase> = RouteProp<
  ParamListBase,
  ScreenName
>;

export type NavigationStackList = NativeStackNavigationProp<ParamListBase>;

const createScreen = <T>(name: string, component: React.ComponentType<T>) => ({
  name,
  component,
  options: screenOptions,
});

const screens = [
  createScreen("Home", Home),
  createScreen("CarDetails", CarDetails),
  createScreen("SellerProfile", SellerProfile),
  createScreen("CarSell", CarSell),
  createScreen("Login", Login),
];

export { screens };
