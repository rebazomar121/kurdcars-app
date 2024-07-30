import React from "react"
import { View } from "react-native"
import Text from "@components/reusable/Text"

type Type = React.FC<{
  label: string
  color?: "primary" | "green" | "orange" | "red" | "blue" | "black"
}>

const FlatLabel: Type = ({ label, color = "primary" }) => {
  let bgColor =
    color === "primary"
      ? `bg-primary`
      : color === "green"
      ? `bg-green-400`
      : color === "orange"
      ? `bg-orange-400`
      : color === "red"
      ? `bg-red-300`
      : color === "blue"
      ? `bg-blue-400`
      : color === "black"
      ? `bg-black`
      : `bg-primary`

  return (
    <View
      className={`flex justify-center items-center rounded-md w-[70] h-[20px] ${bgColor}`}
    >
      <Text
        className={` text-center text-white ${bgColor}`}
        fontFamily={"boldK24"}
      >
        {label}
      </Text>
    </View>
  )
}

export default FlatLabel
