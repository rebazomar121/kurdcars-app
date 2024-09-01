import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import ButtonWithIcon from "@components/reusable/ButtonWithIcon";
import InputWithIcon from "@components/reusable/InputWithIcon";
import {
  FilterIcon,
  SearchIcon,
  LocationIcon,
  SellIcon,
  BookmarkIcon,
  PersonIcon,
} from "@helpers/utils/Icons";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

type Type = React.FC<{}>;

const Footer: Type = () => {
  const navigation: any = useNavigation();
  const [activeScreen, setActiveScreen] = useState("home");

  const handleChangeScreen = (screen: string) => {
    navigation.navigate(screen);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("state", () => {
      // Get the current route name
      const currentRoute =
        navigation.getState().routes[navigation.getState().index].name;
      setActiveScreen(currentRoute);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View className="flex  absolute bottom-0 w-full h-[12%]  flex-row justify-center items-center">
      <View className="rounded-md bg-white  w-[100%] mb-4 h-16 flex flex-row justify-around items-center">
        <TouchableOpacity
          className=" w-14 h-14 flex justify-center items-center"
          onPress={() => handleChangeScreen("Home")}
        >
          <Octicons
            name="home"
            size={24}
            color={activeScreen === "Home" ? "#573CDA" : "#B9B9B9"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChangeScreen("OfferPage")}
          className=" w-14 h-14 flex justify-center items-center"
        >
          <SellIcon
            color={activeScreen === "OfferPage" ? "#573CDA" : "#B9B9B9"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChangeScreen("FavoriteCar")}
          className=" w-14 h-14 flex justify-center items-center"
        >
          <BookmarkIcon
            color={activeScreen === "FavoriteCar" ? "#573CDA" : "#B9B9B9"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleChangeScreen("Profile")}
          className=" w-14 h-14 flex justify-center items-center"
        >
          <PersonIcon
            color={activeScreen === "Profile" ? "#573CDA" : "#B9B9B9"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
