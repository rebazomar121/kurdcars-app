import React, { ReactNode } from "react"
import { View } from "react-native"

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      {children}
    </View>
  )
}

export default Container
