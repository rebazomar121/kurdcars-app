import React from "react"
import { Text } from "react-native"

type Props = {
  children: React.ReactNode
  className?: string
  style?: any
  fontFamily?: any
}
// boldK24

const CustomText: React.FC<Props> = ({
  children,
  className,
  style,
  fontFamily = "regularK24",
}) => {
  let styles = {
    fontFamily: fontFamily === "bold" ? "boldK24" : "regularK24",
  }

  return (
    <Text
      style={[styles, style]}
      className={`text-left text-black ${className}`}
    >
      {children}
    </Text>
  )
}

export default CustomText
