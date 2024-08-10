import React from "react"
import Layout from "@src/components/layout/Layout"
import ScrollRefresh from "@components/reusable/ScrollRefetch"
import Text from "@src/components/reusable/Text"
import Container from "@src/components/reusable/Container"
import { View, TouchableOpacity } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const CarHeader: React.FC = () => {
  return (
    <View>
      <View className="flex  flex-row justify-between items-center p-4">
        <Ionicons name="chevron-back-circle-outline" size={24} color="black" />
      </View>
    </View>
  )
}

export default CarHeader
