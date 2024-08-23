import React, { useState } from "react";
import Text from "./Text";
import { View, TouchableOpacity } from "react-native";

type Type = React.FC<{
  onChange: (value: any) => void;
  label?: string;
  defaultSelected?: any;
  colorsList: Array<{
    label: string;
    value: any;
  }>;
}>;

const CarColorSelector: Type = ({
  onChange,
  colorsList,
  label,
  defaultSelected,
}) => {
  const [selectedColor, setSelectedColor] = useState(defaultSelected);

  return (
    <View className="my-4 ">
      <Text className="text-xl mb-2">{label}</Text>

      <View
        className={`flex flex-row justify-center items-center flex-wrap gap-2 rounded-md p-4 bg-gray-400`}
      >
        {colorsList.map((color, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onChange(color.value);
                setSelectedColor(color.value);
              }}
              key={index}
              className={`p-2 h-10 w-10 rounded-full ${index === 0 ? "" : ""} ${
                selectedColor === color.value
                  ? "border-2 border-primary"
                  : "bg-white"
              }`}
              style={{
                backgroundColor: color.value,
              }}
            ></TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CarColorSelector;
