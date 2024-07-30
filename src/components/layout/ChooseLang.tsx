import React from "react"
import { View, Image, TouchableOpacity } from "react-native"
import Container from "@src/components/reusable/Container"
import Text from "@components/reusable/Text"
import { useTranslation } from "react-i18next"
import { GENERAL_CONSTANTS } from "@src/constants/general.const"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { langChanger, langs } from "@helpers/utils/lang"

type Type = React.FC<{
  onEnd: () => void
}>

const ChooseLang: Type = ({ onEnd }) => {
  const { t: translate } = useTranslation()

  const handleSelectLang = (lang: string) => {
    AsyncStorage.setItem(GENERAL_CONSTANTS.STORAGE_LANG, lang)
    AsyncStorage.setItem(GENERAL_CONSTANTS.FIRST_TIME, "false")
    langChanger(lang)
    onEnd()
  }

  return (
    <Container>
      <Text className="text-center my-6 text-3xl" fontFamily="boldK24">
        {translate("general.chooseLanguage")}
      </Text>

      <View className="flex flex-cols gap-4">
        <TouchableOpacity onPress={() => handleSelectLang(langs.ku)}>
          <Image
            source={require("@assets/images/Flag_of_Kurdistan.png")}
            className="w-28 h-20"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSelectLang(langs.ar)}>
          <Image
            source={require("@assets/images/Flag_of_Iraq.png")}
            className="w-28 h-20"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSelectLang(langs.en)}>
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

export default ChooseLang