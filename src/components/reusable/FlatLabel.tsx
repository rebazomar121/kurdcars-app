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
      ? `border-primary`
      : color === "green"
      ? `border-green-600`
      : color === "orange"
      ? `border-orange-600`
      : color === "red"
      ? `border-red-600`
      : color === "blue"
      ? `border-blue-600`
      : color === "black"
      ? `border-black`
      : `border-primary`

  let textColor =
    color === "primary"
      ? `text-primary`
      : color === "green"
      ? `text-green-600`
      : color === "orange"
      ? `text-orange-600`
      : color === "red"
      ? `text-red-600`
      : color === "blue"
      ? `text-blue-600`
      : color === "black"
      ? `text-black`
      : `text-primary`

  return (
    <View
      className={`flex justify-center border items-center rounded-md w-[70] h-[20px]  ${bgColor}`}
    >
      <Text
        className={` text-center text-white ${textColor}`}
        fontFamily={"boldK24"}
      >
        {label}
      </Text>
    </View>
  )
}

export default FlatLabel
