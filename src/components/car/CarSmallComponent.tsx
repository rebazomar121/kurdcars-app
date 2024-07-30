import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import FlatLabel from "../reusable/FlatLabel"
import Text from "../reusable/Text"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { priceStringWithCurrencySymbol, metricCalculator } from "@helpers/func"

type Type = React.FC<{
  img: string
  brandImg: string
  labels: string[]
  brand: string
  model: string
  year: string
  isNew: boolean
  price: string
  currency: string
  metricAge: string
  metricType: string
}>

const CarSmallComponent: Type = ({
  img,
  brandImg,
  labels,
  brand,
  model,
  year,
  isNew,
  price,
  currency,
  metricAge,
  metricType,
}) => {
  return (
    <TouchableOpacity className="flex flex-row rounded-md w-full h-[130px] bg-gray-100 mb-4">
      <Image
        source={{
          uri: img,
        }}
        className="w-1/3 h-full rounded-l-md "
      />
      <View className="flex flex-col justify-between w-2/3 h-[40px] p-2 ">
        <View className="flex flex-row justify-between items-center w-full h-[20px] ">
          <Image
            source={{
              uri: brandImg,
            }}
            className="w-[50px] h-[19px] rounded-full"
            resizeMode="contain"
          />
          <Text className="text-lg  text-gray-800 " fontFamily={"boldK24"}>
            {priceStringWithCurrencySymbol(price, currency)}
          </Text>
        </View>
        <View className="flex flex-row items-center w-full h-[40px] justify-between mt-4">
          {brand && <FlatLabel label={brand} color="blue" />}
          {model && <FlatLabel label={model} color="green" />}
          {year && <FlatLabel label={year} color="black" />}
        </View>
        <View className="h-[20px] mt-2 flex flex-row">
          <View className="flex flex-row justify-between items-center mr-2">
            <MaterialCommunityIcons
              name="car-speed-limiter"
              size={20}
              color="#736fae"
            />
            <Text
              className="text-lg  text-gray-800 mx-2"
              fontFamily={"boldK24"}
            >
              {metricCalculator(metricAge, metricType)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CarSmallComponent
