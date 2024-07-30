import React, { useState } from "react"
import { View, TouchableOpacity } from "react-native"
import ButtonWithIcon from "@components/reusable/ButtonWithIcon"
import InputWithIcon from "@components/reusable/InputWithIcon"
import {
  FilterIcon,
  SearchIcon,
  LocationIcon,
  SellIcon,
  BookmarkIcon,
  PersonIcon,
} from "@helpers/utils/Icons"
import Text from "@components/reusable/Text"
import Entypo from "@expo/vector-icons/Entypo"
import Octicons from "@expo/vector-icons/Octicons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type Type = React.FC<{}>

const Footer: Type = () => {
  const [activeScreen, setActiveScreen] = useState("home")
  // #736fae
  return (
    <View className="flex  absolute bottom-0 w-full h-[16%]  flex-row justify-center items-center">
      <View className="rounded-md border-2  bg-gray-100 border-gray-200 w-[90%] mb-4 h-16 flex flex-row justify-around items-center">
        <TouchableOpacity
          className=" w-14 h-14 flex justify-center items-center"
          onPress={() => setActiveScreen("home")}
        >
          <Octicons
            name="home"
            size={24}
            color={activeScreen === "home" ? "#736fae" : "#B9B9B9"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveScreen("sell")}
          className=" w-14 h-14 flex justify-center items-center"
        >
          <SellIcon color={activeScreen === "sell" ? "#736fae" : "#B9B9B9"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveScreen("bookmarked")}
          className=" w-14 h-14 flex justify-center items-center"
        >
          <BookmarkIcon
            color={activeScreen === "bookmarked" ? "#736fae" : "#B9B9B9"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveScreen("person")}
          className=" w-14 h-14 flex justify-center items-center"
        >
          <PersonIcon
            color={activeScreen === "person" ? "#736fae" : "#B9B9B9"}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer
