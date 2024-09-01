import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@components/reusable/Text";
import { getClassNames } from "@helpers/func";

type Type = React.FC<{
  onClick: () => void;
  classNameButton?: string;
  title: string;
  Icon?: any;
}>;

const CircleButtonWithIcon: Type = ({
  onClick,
  classNameButton,
  title = "",
  Icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className="flex flex-col items-center justify-center w-24 h-24"
    >
      <View
        className={getClassNames(
          "rounded-full w-24 h-24  flex flex-row py-2 justify-center items-center border-primary border",
          classNameButton
        )}
      >
        {Icon && Icon}
      </View>
      {title && (
        <Text className="text-xl text-center" fontFamily="bold">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CircleButtonWithIcon;
