import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
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

const CarSmallComponent: Type = ({
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

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CarDetails")}
      className="flex border border-gray-300 flex-row rounded-md w-full h-[130px] bg-gray-100 mb-4"
    >
      <Image
        source={{
          uri: img,
        }}
        className="w-1/3 h-full rounded-l-md "
      />
      <View className="flex flex-col justify-between w-2/3  p-2">
        <View className="flex flex-row justify-between items-center w-full h-[20px] ">
          <Text className="text-lg  text-gray-800 " fontFamily={"bold"}>
            {title}
          </Text>
          <Image
            source={{
              uri: brandImg,
            }}
            className="w-[50px] h-[19px] rounded-full"
            resizeMode="contain"
          />
        </View>
        <View className="flex-row space-x-2 ">
          <View className="px-3 py-1 rounded-sm border border-gray-300">
            <Text className="text-gray-800">{year}</Text>
          </View>
          <View className="px-3 py-1 rounded-sm border border-gray-300">
            <Text className="text-gray-800">
              {metricCalculator(metricAge, metricType)}
            </Text>
          </View>
        </View>

        <View className="h-[30px] bg-green mt-2 flex flex-row justify-between">
          <View className="flex flex-row  justify-between items-center mr-2">
            <Entypo name="location-pin" size={14} color="#573CDA" />
            {/* TODO cites must be localize */}
            <Text className="text-sm  text-gray-800 ">{location}</Text>
          </View>
          <Text className="text-lg h-10 text-gray-800 " fontFamily={"bold"}>
            {priceStringWithCurrencySymbol(price, currency)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CarSmallComponent;
