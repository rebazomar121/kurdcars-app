import React, { useState } from "react";
import Text from "./Text";
import { View, TouchableOpacity } from "react-native";

type Type = React.FC<{
  onChange: (value: any) => void;
  label?: string;
  defaultSelected?: any;
  buttonsList: Array<{
    label: string;
    value: any;
  }>;
}>;

const Switcher: Type = ({ onChange, buttonsList, label, defaultSelected }) => {
  const [selected, setSelected] = useState<any>(defaultSelected);
  return (
    <View className="my-4">
      <Text className="text-xl">{label}</Text>

      <View className={`flex flex-row flex-wrap gap-2  rounded-md  `}>
        {buttonsList.map((button, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                onChange(button.value);
                setSelected(button.value);
              }}
              key={index}
              className={`p-2 rounded-md ${index === 0 ? "" : ""} ${
                selected === button.value ? "bg-primary" : "bg-white"
              }`}
            >
              <Text
                className={`text-center text-xl ${
                  selected === button.value ? "text-white" : "text-black"
                }`}
              >
                {button.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Switcher;
