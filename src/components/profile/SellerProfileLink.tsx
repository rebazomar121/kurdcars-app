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

const SellerProfileLink: Type = ({ name, img, location }) => {
  const navigation: any = useNavigation();

  return (
    <View className="p-4 ">
      <Text className="text-lg" fontFamily={"bold"}>
        Seller Profile
      </Text>
      <View className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-md">
        <Image
          source={{ uri: img }}
          style={{ resizeMode: "cover" }}
          className="w-20 h-20 rounded-full mt-4"
        />
        <View className="flex flex-row ">
          <Text className="text-lg mt-4 mx-2" fontFamily={"bold"}>
            {name}
          </Text>
          {location && (
            <View className="flex flex-row items-center mt-4">
              <Text className="text-lg " fontFamily={"bold"}>
                {location}
              </Text>
              <Entypo name="location-pin" size={24} color="#573CDA" />
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SellerProfile");
          }}
          className="flex flex-row items-center"
        >
          <Text className="text-primary mt-4" fontFamily={"bold"}>
            View Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SellerProfileLink;
