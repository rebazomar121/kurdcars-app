import React from "react";
import Text from "@src/components/reusable/Text";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";

type Type = React.FC<{
  name: string;
  img: string;
}>;

const NewCarCart: Type = ({ name, img }) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("CarDetails");
      }}
      className="border border-gray-300 rounded-lg"
    >
      <View className="">
        <Image
          source={{ uri: img }}
          style={{ resizeMode: "contain" }}
          className="w-40 h-40 rounded-lg "
        />
        <View className="flex flex-col absolute bottom-2">
          <Text className="text-sm mx-2  text-black" fontFamily={"bold"}>
            {name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewCarCart;
