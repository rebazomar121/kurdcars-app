import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import Container from "@src/components/reusable/Container"
import Text from "@components/reusable/Text"
import { useTranslation } from "react-i18next"

const layout: React.FC = () => {
  const { t: translate } = useTranslation()
  return (
    <Container>
      <Text className="text-center my-6 text-3xl" fontFamily="boldK24">
        {translate("general.chooseLanguage")}
      </Text>

      <View className="flex flex-cols gap-4">
        <TouchableOpacity>
          <Image
            source={require("@assets/images/Flag_of_Iraq.png")}
            className="w-28 h-20"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("@assets/images/Flag_of_Kurdistan.png")}
            className="w-28 h-20"
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("@assets/images/Flag_of_the_UK.png")}
            className="w-28 h-20"
          />
        </TouchableOpacity>
      </View>

      <View className="absolute bottom-10">
        <Image source={require("@assets/logo.png")} className="w-20 h-20" />
      </View>
    </Container>
  )
}

export default layout
