import React from "react"
import { View } from "react-native"
import Text from "./Text"

type Type = React.FC<{
  title?: string
  value?: string
}>

const CarFuture: Type = ({ title, value }) => {
  return (
    <View className="px-2">
      <View className="flex flex-row  items-center p-1 border-b border-gray-400">
        <View className="w-1/2">
          <Text className="text-lg text-gray-500" fontFamily={"bold"}>
            {title}
          </Text>
        </View>

        <View className="w-1/2">
          <Text className="text-lg text-gray-500" fontFamily={"bold"}>
            {value}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default CarFuture
