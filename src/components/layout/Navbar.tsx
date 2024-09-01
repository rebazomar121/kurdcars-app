import React, { useState, useContext } from "react";
import { View } from "react-native";
import ButtonWithIcon from "@components/reusable/ButtonWithIcon";
import InputWithIcon from "@components/reusable/InputWithIcon";
import { FilterIcon, SearchIcon, LocationIcon } from "@helpers/utils/Icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "@context/context";
import CarFilters from "../car/CarFilters";

type Type = React.FC<{}>;

const Navbar: Type = () => {
  const navigation: any = useNavigation();
  const { userData }: any = useUserContext();
  const [showCarFilters, setShowCarFilters] = useState<boolean>(false);

  return (
    <View className="flex  flex-row justify-between items-center p-4">
      {!userData ? (
        <ButtonWithIcon
          Icon={<MaterialIcons name="sell" size={24} color="#573CDA" />}
          onClick={() => navigation.navigate("CarSell")}
          classNameButton="bg-white w-24 border-gray-400 border"
          title="Sell"
        />
      ) : (
        <ButtonWithIcon
          Icon={<MaterialIcons name="login" size={24} color="#573CDA" />}
          onClick={() => navigation.navigate("Login")}
          classNameButton="bg-white w-24 border-gray-400 border"
          title="Login"
        />
      )}

      <InputWithIcon
        onChange={(e) => console.log("Search Changed")}
        Icon={<SearchIcon />}
      />
      <ButtonWithIcon
        Icon={<FilterIcon />}
        onClick={() => {
          setShowCarFilters(!showCarFilters);
        }}
        classNameButton="bg-primary"
      />
      <CarFilters
        showCarFilters={showCarFilters}
        setShowCarFilters={setShowCarFilters}
      />
    </View>
  );
};

export default Navbar;
