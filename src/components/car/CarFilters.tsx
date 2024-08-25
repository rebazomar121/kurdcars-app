import React, { useState, useEffect } from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import Container from "@src/components/reusable/Container";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import PhoneNumberInput from "@src/components/reusable/PhoneNumberInput";
import OtpInput from "@src/components/reusable/OtpInput";
import PrimaryCartWithText from "@src/components/layout/PrimaryCartWithText";
import BackNavbar from "@src/components/layout/BackNavbar";

type Type = React.FC<{
  showCarFilters: boolean;
  setShowCarFilters: any;
}>;

const CarFilters: Type = ({ showCarFilters, setShowCarFilters }) => {
  return <View></View>;
};

export default CarFilters;
