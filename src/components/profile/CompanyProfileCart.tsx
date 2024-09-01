import React from "react";
import Layout from "@src/components/layout/Layout";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import Container from "@src/components/reusable/Container";
import CarImageSlider from "@src/components/car/CarImageSlider";
import { images, carFutureList } from "@helpers/fakeData";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type Type = React.FC<{
  name: string;
  img: string;
  location?: string;
}>;

const CompanyProfileCart: Type = ({ name, img, location }) => {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SellerProfile");
      }}
    >
      <View className="">
        <Image
          source={{ uri: img }}
          style={{ resizeMode: "cover" }}
          className="w-40 h-40 rounded-lg "
        />
        <View className="flex flex-col absolute bottom-2">
          <Text className="text-sm mx-2 text-white" fontFamily={"bold"}>
            {name}
          </Text>
          {location && (
            <View className="flex flex-row items-center mx-2">
              <Text className="text-sm text-white" fontFamily={"bold"}>
                {location}
              </Text>
              <Entypo name="location-pin" size={24} color="#573CDA" />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CompanyProfileCart;
