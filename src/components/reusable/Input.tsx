import React from "react";
import { View, TextInput } from "react-native";
import Text from "./Text";
import { getClassNames } from "@helpers/func";

type Type = React.FC<{
  Icon?: React.ReactNode;
  onChange: (e: any) => void;
  placeholder?: string;
  label?: string;
  classNameContainer?: string;
  multiline?: boolean;
  numberOfLines?: number;
  placeholderTextColor?: string;
  type?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";
}>;

const Input: Type = ({
  Icon,
  label,
  onChange,
  type = "default",
  classNameContainer,
  placeholderTextColor = "gray",
  placeholder,
  multiline = false,
  numberOfLines = 1,
}) => {
  return (
    // className
    <View
      className={getClassNames(
        "flex flex-cols justify-between  rounded-md ",
        classNameContainer
      )}
    >
      <Text style={{ fontSize: 20 }}>{label}</Text>
      <TextInput
        onChangeText={onChange}
        className="w-[100%] p-2 border-gray-400 rounded-md text-left  border bg-white"
        placeholder={placeholder ? placeholder : label}
        placeholderTextColor={placeholderTextColor}
        style={{ fontFamily: "regularK24", fontSize: 20 }}
        keyboardType={type}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
      {Icon && (
        <View className="absolute  right-0 top-0 bottom-0 flex justify-center items-center w-8 h-8 mt-1 mx-2  bg-white">
          {Icon}
        </View>
      )}
    </View>
  );
};

export default Input;
