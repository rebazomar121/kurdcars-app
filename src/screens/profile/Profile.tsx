import React, { useState } from "react";
import {
  View,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Layout from "@src/components/layout/Layout";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import { generalImages } from "@helpers/fakeData";
import BackNavbar from "@src/components/layout/BackNavbar";
import Text from "@src/components/reusable/Text";
import ImageView from "react-native-image-viewing";
import Entypo from "@expo/vector-icons/Entypo";
import CircleButtonWithIcon from "@src/components/reusable/CircleButtonWithIcon";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  FilterIcon,
  SearchIcon,
  LocationIcon,
  SellIcon,
  BookmarkIcon,
  PersonIcon,
} from "@helpers/utils/Icons";
import { useNavigation } from "@react-navigation/native";

const Profile: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<any>("");
  const [visible, setIsVisible] = useState(false);
  const { width } = Dimensions.get("window");
  const navigation: any = useNavigation();
  const height = width * 0.7;
  const profileSizeImage = width * 0.2;
  const profileSize = width * 0.96;

  return (
    <Layout showHeader={false}>
      <ScrollRefresh marginBottom={0} height="97.6%">
        <BackNavbar title="Profile" />
        <View className="my-4" />
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

        <View className="flex flex-col  items-center justify-center shadow-md">
          <Image
            source={{
              uri: "https://www.shutterstock.com/image-photo/beautiful-man-standing-smiling-three-600nw-2263100009.jpg",
            }}
            style={{ resizeMode: "cover" }}
            className="w-40 h-40 rounded-full mt-4"
          />
          <View className="flex flex-row ">
            <Text className="text-lg mt-4 mx-2" fontFamily={"bold"}>
              Rebaz Dev
            </Text>
            <MaterialIcons
              name="verified-user"
              style={{ marginTop: 16, marginRight: 4 }}
              size={24}
              color="#0765FF"
            />

            <View className="flex flex-row items-center mt-4">
              <Text className="text-lg " fontFamily={"bold"}>
                | Erbil
              </Text>
              <Entypo name="location-pin" size={24} color="#573CDA" />
            </View>
          </View>
          <Text className="text-lg " fontFamily={"bold"}>
            0750 123 4567
          </Text>
        </View>

        <TouchableOpacity>
          <Text
            className="text-xl text-primary text-center"
            fontFamily={"bold"}
          >
            Edit
          </Text>
        </TouchableOpacity>

        <View className="flex flex-row justify-between items-center mt-10 px-4">
          <CircleButtonWithIcon
            title="Sell"
            onClick={() => {
              navigation.navigate("CarSell");
            }}
            Icon={<SellIcon size={26} color="#573CDA" />}
          />
          <CircleButtonWithIcon
            title="Favorite"
            onClick={() => {
              navigation.navigate("FavoriteCarNonAnimated");
            }}
            Icon={<BookmarkIcon color={"#573CDA"} />}
          />
          <CircleButtonWithIcon
            title="Phone"
            onClick={() => {
              navigation.navigate("ChangePhoneNumber");
            }}
            Icon={<Entypo name="phone" size={30} color="#573CDA" />}
          />
        </View>

        <View className="flex flex-row justify-between items-center mt-10 px-4">
          <CircleButtonWithIcon
            title="History"
            onClick={() => {
              navigation.navigate("CarHistory");
            }}
            Icon={<MaterialIcons name="history" size={30} color="#573CDA" />}
          />
        </View>

        <ImageView
          images={[currentImage]}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => {
            setCurrentImage("");
            setIsVisible(false);
          }}
        />

        <View className="mb-32" />
      </ScrollRefresh>
    </Layout>
  );
};

export default Profile;
