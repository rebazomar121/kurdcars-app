import React from "react"
import { View, Image } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Container from "@src/components/reusable/Container"
import Text from "@components/reusable/Text"
import { useTranslation } from "react-i18next"

const layout: React.FC = () => {
  const { t: translate } = useTranslation()

  return (
    <Container>
      <MaterialCommunityIcons
        name="network-strength-4-alert"
        size={24}
        color="white"
      />
      <Text className="text-center mt-3 text-3xl" fontFamily="boldK24">
        {translate("general.networkLost")}
      </Text>
      <View className="absolute bottom-10">
        <Image source={require("@assets/logo.png")} className="w-20 h-20" />
      </View>
    </Container>
  )
}

export default layout
