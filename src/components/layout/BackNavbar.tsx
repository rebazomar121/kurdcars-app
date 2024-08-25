import React, { useState, useEffect } from "react";
import Text from "@src/components/reusable/Text";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type Type = React.FC<{
  title: string;
}>;

const BackNavbar: Type = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View className="z-20 top-2 left-2 flex  flex-row ">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="p-2 rounded-b-md bg-white rounded-full"
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text className="flex text-2xl  self-center mx-2" fontFamily="bold">
        {title}
      </Text>
    </View>
  );
};

export default BackNavbar;
