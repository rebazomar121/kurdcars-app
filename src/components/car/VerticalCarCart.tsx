import React from "react";
import { View, Image, TouchableOpacity, Dimensions } from "react-native";
import FlatLabel from "../reusable/FlatLabel";
import Text from "../reusable/Text";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { priceStringWithCurrencySymbol, metricCalculator } from "@helpers/func";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

type Type = React.FC<{
  title: string;
  location: string;
  img: string;
  brandImg: string;
  labels: string[];
  brand: string;
  model: string;
  year: string;
  isNew: boolean;
  price: string;
  currency: string;
  metricAge: string;
  metricType: string;
}>;

const VerticalCarCart: Type = ({
  title,
  location,
  img,
  brandImg,
  labels,
  brand,
  model,
  year,
  isNew,
  price,
  currency,
  metricAge,
  metricType,
}) => {
  const navigation: any = useNavigation();

  const { width } = Dimensions.get("window");
  const height = width * 0.4;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CarDetails")}
      className="flex border border-gray-300 flex-cols rounded-md  h-[200px] bg-gray-100 mb-4"
    >
      <Image
        source={{
          uri: img,
        }}
        className="h-full rounded-l-md"
        width={width / 3}
        style={{
          resizeMode: "cover",
        }}
      />
      <View className="absolute bottom-1 left-1">
        <Text className="text-lg  text-white " fontFamily={"bold"}>
          {title}
        </Text>
        <Text className="text-md  text-white " fontFamily={"bold"}>
          {priceStringWithCurrencySymbol(price, currency)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default VerticalCarCart;
