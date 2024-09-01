import React, { useState } from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import Container from "@src/components/reusable/Container";
import { generalImages } from "@helpers/fakeData";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ExplorerCar from "@src/components/car/ExplorerCar";
import AntDesign from "@expo/vector-icons/AntDesign";
import ImageView from "react-native-image-viewing";

const SellerProfile: React.FC = () => {
  const { width } = Dimensions.get("window");
  const height = width * 0.7;
  const profileSizeImage = width * 0.2;
  const profileSize = width * 0.96;
  const navigation = useNavigation();
  const [visible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState<any>("");

  return (
    <Container>
      <ScrollRefresh marginBottom={0}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          className="absolute z-50 top-2 left-2  p-2 rounded-b-md bg-white rounded-full"
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        {/* TODO if the image not found set kurdcars log in background */}
        <Pressable
          onPress={() => {
            setCurrentImage({
              uri: generalImages.carSellerShop,
            });
            setIsVisible(true);
          }}
        >
          <Image
            source={{
              uri: generalImages.carSellerShop,
            }}
            style={{ width, height, resizeMode: "cover" }}
          />
          <View
            className="absolute z-30  p-4 bg-black opacity-20 w-full"
            style={{
              width,
              height,
            }}
          />
        </Pressable>

        {/* profile */}

        <View className="mb-4  flex flex-row items-center p-2 px-4 bg-white ">
          <Pressable
            onPress={() => {
              setCurrentImage({
                uri: generalImages.sellerProfile,
              });
              setIsVisible(true);
            }}
          >
            <Image
              source={{
                uri: generalImages.sellerProfile,
              }}
              style={{
                width: profileSizeImage,
                height: profileSizeImage,
                resizeMode: "cover",
              }}
              className="rounded-full"
            />
          </Pressable>

          <View className="mx-2">
            <View className="flex flex-row">
              <Text className=" text-xl mr-2" fontFamily={"bold"}>
                Rebaz Omar
              </Text>
              <MaterialIcons name="verified-user" size={24} color="#0765FF" />
            </View>

            <View className="flex flex-row  ">
              <Text className="text-lg " fontFamily={"bold"}>
                Erbil
              </Text>
              <Entypo name="location-pin" size={24} color="#573CDA" />
              <Text className="text-lg " fontFamily={"bold"}>
                | 0750 123 4567
              </Text>
            </View>
          </View>
        </View>

        {/* About */}
        <View className="px-4 rounded-md bg-white mx-4 ">
          <Text className="text-2xl text-black" fontFamily={"bold"}>
            About
          </Text>
          <Text className="text-lg text-gray-800 ">
            This Seller is a trusted our of the car shop and he has a good
            reputation in the market.
          </Text>
        </View>

        <Text
          className="text-2xl text-black mx-4 mt-4"
          fontFamily={"bold"}
          style={{ marginTop: 20 }}
        >
          Other Cars
        </Text>

        <ExplorerCar />

        <ImageView
          images={[currentImage]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => {
            setCurrentImage("");
            setIsVisible(false);
          }}
        />
      </ScrollRefresh>
    </Container>
  );
};

export default SellerProfile;
