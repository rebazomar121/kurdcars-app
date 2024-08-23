import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@components/reusable/Text";
import { getClassNames } from "@helpers/func";

type Type = React.FC<{
  onClick: () => void;
  classNameButton?: string;
  title: string;
}>;

const Button: Type = ({ onClick, classNameButton, title = "" }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={getClassNames(
        "rounded-lg flex flex-row py-2 justify-center items-center my-4",
        "w-full",
        classNameButton
      )}
    >
      {title && (
        <Text className="text-white text-2xl " fontFamily="bold">
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
