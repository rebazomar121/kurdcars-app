import React from "react";
import Text from "@src/components/reusable/Text";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
type Type = React.FC<{
  phoneNumber?: string;
  whatsappNumber?: string;
}>;

const FixedCallNow: Type = ({ phoneNumber, whatsappNumber }) => {
  return (
    <View className="flex  absolute bottom-0 w-full   flex-row justify-center items-center">
      {phoneNumber && (
        <TouchableOpacity className="flex flex-row h-10  bg-primary w-1/2 mx-2 justify-center items-center rounded-md">
          <Text className="text-white text-2xl mx-2">Call Now</Text>
          <FontAwesome name="phone" size={24} color="white" />
        </TouchableOpacity>
      )}

      {whatsappNumber && (
        <TouchableOpacity className="flex flex-row h-10   bg-[#25d366] w-1/3 mx-2 justify-center items-center rounded-md">
          <Fontisto name="whatsapp" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FixedCallNow;
