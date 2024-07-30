import React from "react"
import { View } from "react-native"
import CarSmallComponent from "./CarSmallComponent"

type Type = React.FC<{}>

const ExplorerCar: Type = () => {
  return (
    <View className="mx-4 h-full">
      <CarSmallComponent />
    </View>
  )
}

export default ExplorerCar
