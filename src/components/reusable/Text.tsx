import React from "react"
import { Text } from "react-native"

type Props = {
  children: React.ReactNode
  className?: string
  style?: any
  fontFamily?: any
}

const CustomText: React.FC<Props> = ({
  children,
  className,
  style,
  fontFamily = "regularK24",
}) => {
  let styles = {
    fontFamily: fontFamily,
  }

  return (
    <Text style={[styles, style]} className={`text-left  ${className}`}>
      {children}
    </Text>
  )
}

export default CustomText
