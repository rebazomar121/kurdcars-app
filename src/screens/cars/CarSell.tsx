import React, { useState } from "react";
import Layout from "@src/components/layout/Layout";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import Container from "@src/components/reusable/Container";
import CarImageSlider from "@src/components/car/CarImageSlider";
import { images, carFutureList } from "@helpers/fakeData";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import Divider from "@src/components/reusable/Divider";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { EnginePiston } from "@helpers/utils/Icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Footer from "@src/components/layout/Footer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import SellerProfileLink from "@src/components/profile/SellerProfileLink";
import CarFuture from "@src/components/reusable/CarFuture";
import ExplorerCar from "@src/components/car/ExplorerCar";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const CarSell: React.FC = () => {
  const navigation = useNavigation();
  const [inputData,setInputData]=useState<any>()

  return (
    <Container classNameContainer="none">
      <ScrollRefresh marginBottom={0}>
        {/* navbar */}
        <View className="z-20 top-2 left-2 flex flex-row ">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="p-2 rounded-b-md bg-white rounded-full"
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="flex text-2xl  self-center mx-2" fontFamily="bold">
            Selling Car
          </Text>
        </View>
        {/* post */}
        <View className="p-4">
          <View className="w-full bg-primary mt-4 rounded-md p-2">
            <Text fontFamily={"bold"} className="text-white text-2xl">
              Enter Car Details
            </Text>
          </View>
        </View>
      </ScrollRefresh>
    </Container>
  );
};

export default CarSell;
