import React from "react"
import { View, TextInput } from "react-native"
import { useTranslation } from "react-i18next"

type Type = React.FC<{
  Icon?: React.ReactNode
  onChange: (e: any) => void
  placeholder?: string
}>

const ButtonWithIcon: Type = ({ Icon, onChange }) => {
  const { t: translate } = useTranslation()

  return (
    <View className="flex flex-row justify-between items-center rounded-md  bg-white w-[70%]">
      <TextInput
        onChangeText={onChange}
        className="w-[100%] p-2 border-gray-400 rounded-md  border"
        placeholder={translate("navbar.search")}
        style={{ fontFamily: "regularK24", fontSize: 20 }}
      />
      <View className="absolute  right-0 top-0 bottom-0 flex justify-center items-center w-8 h-8 mt-1 mx-2  bg-white">
        {Icon}
      </View>
    </View>
  )
}

export default ButtonWithIcon
