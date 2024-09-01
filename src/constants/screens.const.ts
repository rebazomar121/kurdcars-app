import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import Home from "@screens/Home";
import CarDetails from "@screens/cars/CarDetails";
import SellerProfile from "@src/screens/profile/SellerProfile";
import CarSell from "@src/screens/cars/CarSell";
import Login from "@screens/auth/Login";
import CarDetailsPreview from "@screens/cars/CarDetailsPreview";
import OfferPage from "@src/screens/offer/OfferPage";
import CarList from "@src/screens/cars/CarList";
import FavoriteCar from "@src/screens/cars/FavoriteCar";
import Profile from "@src/screens/profile/Profile";
import CarHistory from "@src/screens/cars/CarHistory";
import ChangePhoneNumber from "@src/screens/auth/ChangePhoneNumber";

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

const createScreen = <T>(
  name: string,
  component: React.ComponentType<T>,
  options?: any
) => ({
  name,
  component,
  options: options ? options : screenOptions,
});

const screens = [
  createScreen("Home", Home),
  createScreen("CarDetails", CarDetails),
  createScreen("SellerProfile", SellerProfile),
  createScreen("CarSell", CarSell),
  createScreen("Login", Login),
  createScreen("CarDetailsPreview", CarDetailsPreview),
  createScreen("OfferPage", OfferPage, {
    headerShown: false,
    animation: "none",
  }),
  createScreen("CarList", CarList),
  createScreen("FavoriteCar", FavoriteCar, {
    headerShown: false,
    animation: "none",
  }),
  createScreen("FavoriteCarNonAnimated", FavoriteCar),
  createScreen("Profile", Profile, {
    headerShown: false,
    animation: "none",
  }),
  createScreen("CarHistory", CarHistory),
  createScreen("ChangePhoneNumber", ChangePhoneNumber),
];

export { screens };
