import React from "react"
import { View } from "react-native"

type Type = React.FC<{
  classNameDivider?: string
}>

const Divider: Type = ({ classNameDivider }) => {
  return <View className={`${classNameDivider} h-[1px] bg-gray-400`}></View>
}

export default Divider
