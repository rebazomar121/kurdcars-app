import React, { ReactNode } from "react";
import { View, SafeAreaView } from "react-native";
import CarHeader from "../car/CarHeader";
import { getClassNames } from "@helpers/func";

const Container: React.FC<{
  children: ReactNode;
  classNameContainer?: string;
}> = ({ children, classNameContainer }) => {
  return (
    <View
      className={
        classNameContainer
          ? classNameContainer
          : "flex-1 justify-center items-center"
      }
    >
      <SafeAreaView className="h-full">
        <View>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default Container;
