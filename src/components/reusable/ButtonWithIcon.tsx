import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@components/reusable/Text";
import { getClassNames } from "@helpers/func";


type Type = React.FC<{
  Icon: React.ReactNode;
  onClick: () => void;
  classNameButton?: string;
  title?: string;
}>;

const ButtonWithIcon: Type = ({
  Icon,
  onClick,
  classNameButton,
  title = "",
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={getClassNames(
        "rounded-lg flex flex-row justify-center items-center",
        "w-10 h-10",
        classNameButton
      )}
    >
      {title && (
        <Text className="text-primary text-sm font-bold" fontFamily="bold">
          {title}{" "}
        </Text>
      )}
      {Icon}
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
