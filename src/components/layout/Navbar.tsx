import React from "react";
import { View } from "react-native";
import ButtonWithIcon from "@components/reusable/ButtonWithIcon";
import InputWithIcon from "@components/reusable/InputWithIcon";
import { FilterIcon, SearchIcon, LocationIcon } from "@helpers/utils/Icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

type Type = React.FC<{}>;

const Navbar: Type = () => {
  const navigation: any = useNavigation();

  return (
    <View className="flex  flex-row justify-between items-center p-4">
      <ButtonWithIcon
        Icon={<MaterialIcons name="sell" size={24} color="#573CDA" />}
        onClick={() => navigation.navigate("CarSell")}
        classNameButton="bg-white w-24 border-gray-400 border"
        title="Sell"
      />
      <InputWithIcon
        onChange={(e) => console.log("Search Changed")}
        Icon={<SearchIcon />}
      />
      <ButtonWithIcon
        Icon={<FilterIcon />}
        onClick={() => console.log("Filter Clicked")}
        classNameButton="bg-primary"
      />
    </View>
  );
};

export default Navbar;
