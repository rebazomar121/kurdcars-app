import React from "react"
import { View } from "react-native"

type Type = React.FC<{
  classNameDivider?: string
  showTooltip?: boolean
}>

const Divider: Type = ({ classNameDivider, showTooltip = true }) => {
  return (
    <View
      className={`${classNameDivider} ${showTooltip && "h-[1px]"}  bg-gray-400`}
    ></View>
  )
}

export default Divider
