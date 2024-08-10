import React, { ReactNode } from "react"
import { View, SafeAreaView } from "react-native"
import CarHeader from "../car/CarHeader"

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View className="flex-1 justify-center items-center ">
      <SafeAreaView className="h-full">
        <View>{children}</View>
      </SafeAreaView>
    </View>
  )
}

export default Container
