import React from "react"
import { View, TouchableOpacity } from "react-native"

type Type = React.FC<{
  Icon: React.ReactNode
  onClick: () => void
  classNameButton?: string
}>

const ButtonWithIcon: Type = ({ Icon, onClick, classNameButton }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={`${classNameButton} w-10 h-10  rounded-lg flex justify-center items-center`}
    >
      {Icon}
    </TouchableOpacity>
  )
}

export default ButtonWithIcon
