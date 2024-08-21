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

const SellingCarForm: React.FC = () => {
  const navigation = useNavigation();
  const [inputData,setInputData]=useState<any>()

  return (
    <View></View>
  );
};

export default SellingCarForm;
