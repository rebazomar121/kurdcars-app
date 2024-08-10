import React from "react"
import { View } from "react-native"

type Type = React.FC<{
  classNameDivider?: string
  showTooltip?: boolean
  height?: string
}>

const Divider: Type = ({
  classNameDivider = "bg-gray-400",
  showTooltip = true,
  height = "h-[1px]",
}) => {
  return (
    <View className={`${classNameDivider} ${showTooltip && height} `}></View>
  )
}

export default Divider
