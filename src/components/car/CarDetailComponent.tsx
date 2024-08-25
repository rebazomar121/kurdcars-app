import React from "react";
import Text from "@src/components/reusable/Text";
import { View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CarImageSlider from "@src/components/car/CarImageSlider";
import Divider from "@src/components/reusable/Divider";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SellerProfileLink from "@src/components/profile/SellerProfileLink";
import CarFuture from "@src/components/reusable/CarFuture";
import ExplorerCar from "@src/components/car/ExplorerCar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";

type Type = React.FC<{
  images: any[];
  onClickBack: any;
  carFutureList: any[];
}>;

const CarDetailComponent: Type = ({ images, onClickBack, carFutureList }) => {
  return (
    <View>
      <CarImageSlider
        images={images}
        vip={true}
        onPressBack={() => {
          onClickBack();
        }}
      />
      <View className="flex flex-row justify-between items-center p-4 ">
        <Text className="text-2xl text-black" fontFamily={"bold"}>
          Car Name
        </Text>
        <Text className="text-2xl text-primary" fontFamily={"bold"}>
          $ 24,000
        </Text>
      </View>
      <Divider
        classNameDivider="bg-gray-300"
        height="h-[2px]"
        showTooltip={true}
      />
      <View>
        <View className="flex flex-row  justify-between items-center p-4">
          <View className="flex flex-row">
            <Entypo name="location-pin" size={24} color="#573CDA" />
            {/* TODO cites must be localize */}
            <Text className="text-lg  text-gray-800 ">Erbil</Text>
          </View>

          <View className="flex flex-row">
            <MaterialIcons name="date-range" size={24} color="#573CDA" />
            <Text className="text-lg  text-gray-800 "> 8 Hours</Text>
          </View>
        </View>
      </View>
      <Divider
        classNameDivider="bg-gray-300"
        height="h-[2px]"
        showTooltip={true}
      />

      <View>
        <View className="flex flex-row items-center p-4">
          <View className="flex flex-col w-1/2  justify-center self-center items-center">
            <MaterialCommunityIcons
              name="engine-outline"
              size={30}
              color="#573CDA"
            />
            <Text className="text-xl mx-2 text-primary" fontFamily={"bold"}>
              2.0 L
            </Text>
          </View>
          <View className="flex flex-col w-1/2  justify-center self-center items-center">
            <MaterialCommunityIcons name="piston" size={24} color="#573CDA" />
            <Text className="text-xl mx-2 text-primary" fontFamily={"bold"}>
              4 Cylinders
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center p-4">
          <View className="flex flex-col w-1/2  justify-center self-center items-center">
            <MaterialCommunityIcons
              name="car-shift-pattern"
              size={26}
              color="#573CDA"
            />
            <Text className="text-xl mx-2 text-primary" fontFamily={"bold"}>
              Automatic
            </Text>
          </View>
          <View className="flex flex-col w-1/2  justify-center self-center items-center">
            <MaterialCommunityIcons name="fuel" size={26} color="#573CDA" />
            <Text className="text-xl mx-2 text-primary" fontFamily={"bold"}>
              Fuel
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center p-4">
          <View className="flex flex-col w-1/2  justify-center self-center items-center">
            <Ionicons name="speedometer-outline" size={26} color="#573CDA" />
            <Text className="text-xl mx-2 text-primary" fontFamily={"bold"}>
              7,000 KM
            </Text>
          </View>
          <View className="flex flex-col w-1/2  justify-center self-center items-center">
            <Ionicons name="earth" size={26} color="#573CDA" />
            <Text className="text-xl mx-2 text-primary" fontFamily={"bold"}>
              U.S.A
            </Text>
          </View>
        </View>
      </View>

      <Divider
        classNameDivider="bg-gray-300"
        height="h-[2px]"
        showTooltip={true}
      />

      <View>
        {carFutureList.map((item, index) => (
          <CarFuture key={index} title={item.title} value={item.value} />
        ))}
      </View>

      <View className="flex flex-row justify-between items-center p-4 bg-white">
        <Text className="text-xl text-black">
          Note: Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Incidunt accusamus exercitationem dicta provident, ipsa magnam quo ad
          quidem, blanditiis, reprehenderit odio officiis. Error reprehenderit
          architecto doloribus tempore quod nemo ratione.
        </Text>
      </View>

      <SellerProfileLink
        name="Rebaz"
        img="https://www.shutterstock.com/image-photo/beautiful-man-standing-smiling-three-600nw-2263100009.jpg"
        location="Erbil"
      />

      <Text className="text-2xl text-black p-4">Similar Cars</Text>

      <ExplorerCar />
      <View className="flex  absolute bottom-0 w-full   flex-row justify-center items-center">
        <TouchableOpacity className="flex flex-row h-10  bg-primary w-1/2 mx-2 justify-center items-center rounded-md">
          <Text className="text-white text-2xl mx-2">Call Now</Text>
          <FontAwesome name="phone" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="flex flex-row h-10   bg-[#25d366] w-1/3 mx-2 justify-center items-center rounded-md">
          <Fontisto name="whatsapp" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CarDetailComponent;
