import React, { useState } from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import Container from "@src/components/reusable/Container";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import SellingCarForm from "@src/components/car/SellingCarForm";

const CarSell: React.FC = () => {
  const navigation = useNavigation();
  const [inputData, setInputData] = useState<any>();

  return (
    <Container classNameContainer="none">
      <ScrollRefresh marginBottom={0} height="100%">
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
        <SellingCarForm inputData={inputData} setInputData={setInputData} />
      </ScrollRefresh>
    </Container>
  );
};

export default CarSell;
