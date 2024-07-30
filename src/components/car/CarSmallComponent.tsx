import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import FlatLabel from "../reusable/FlatLabel"
import Text from "../reusable/Text"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type Type = React.FC<{}>

const CarSmallComponent: Type = () => {
  return (
    <TouchableOpacity className="flex flex-row rounded-md w-full h-[130px] bg-gray-100">
      <Image
        source={{
          uri: "https://www.carscoops.com/wp-content/uploads/2022/04/Ford-Taurus.jpg",
        }}
        className="w-1/3 h-full rounded-l-md "
      />
      <View className="flex flex-col justify-between w-2/3 h-[40px] p-2 ">
        <View className="flex flex-row justify-between items-center w-full h-[20px] ">
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
            }}
            className="w-[50px] h-[19px] rounded-full "
          />
          <Text className="text-lg  text-gray-800 " fontFamily={"boldK24"}>
            $23,000
          </Text>
        </View>
        <View className="flex flex-row justify-between items-center w-full h-[40px] mt-4">
          <FlatLabel label="Ford" color="blue" />
          <FlatLabel label="Ford" color="black" />
          <FlatLabel label="New" color="green" />
        </View>
        <View className="h-[20px] mt-2 flex flex-row">
          <View className="flex flex-row justify-between items-center mr-4">
            <MaterialCommunityIcons
              name="car-speed-limiter"
              size={20}
              color="#736fae"
            />
            <Text
              className="text-lg  text-gray-800 mx-2"
              fontFamily={"boldK24"}
            >
              13,000KM
            </Text>
          </View>
          <View className="flex flex-row justify-between items-center ">
            <MaterialIcons name="access-time" size={20} color="#736fae" />
            <Text
              className="text-lg mx-2 text-gray-800 "
              fontFamily={"boldK24"}
            >
              $23,000
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CarSmallComponent
