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
  const [showMore, setShowMore] = useState<boolean>(false);
  return (
    <View className="my-4">
      <Text className="text-xl">{label}</Text>

      <View className={`flex flex-row flex-wrap gap-2  rounded-md  `}>
        {buttonsList?.slice(0, showMore ? 1000 : 10).map((button, index) => {
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

      {buttonsList?.length > 10 && (
        <>
          {showMore ? (
            <TouchableOpacity
              className="bg-primary p-2 w-24 rounded-md my-2"
              onPress={() => {
                setShowMore(false);
              }}
            >
              <Text className="text-xl text-white">Show Less</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="bg-primary p-2 w-24 rounded-md my-2"
              onPress={() => {
                setShowMore(true);
              }}
            >
              <Text className="text-xl text-white">Show More</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default Switcher;
