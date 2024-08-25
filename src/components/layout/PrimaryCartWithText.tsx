import React from "react";
import Text from "@src/components/reusable/Text";
import { View } from "react-native";

type Type = React.FC<{
  title: string;
  fit?: boolean;
}>;

const PrimaryCartWithText: Type = ({ title, fit = false }) => {
  return (
    <View className={`${fit ? "p-0" : "p-4"}`}>
      <View
        className={`w-full bg-primary p-2 ${
          fit ? "mt-0 rounded-none" : "mt-4 rounded-md"
        }`}
      >
        <Text fontFamily={"bold"} className="text-white text-2xl ">
          {title}
        </Text>
      </View>
    </View>
  );
};

export default PrimaryCartWithText;
