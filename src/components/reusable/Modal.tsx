import React, { ReactNode, useEffect, useRef } from "react";
import { View, Modal, TouchableOpacity, Animated } from "react-native";
import Text from "./Text";
import { AntDesign } from "@expo/vector-icons";
import {
  responsiveScreenWidth as wp,
  responsiveScreenHeight as hp,
} from "react-native-responsive-dimensions";
import { getClassNames } from "@helpers/func";

type Type = React.FC<{
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  bgColor?: string;
  bgOpacity?: string;
  modalSize?: "small" | "medium" | "large" | "full";
  costumeSize?: number;
  title?: string;
  subTitle?: string;
  cancelable?: boolean;
  animationType?: "none" | "slide" | "fade" | undefined;
  duration?: number;
  headClassName?: string;
  childrenClassName?: string;
  cancelButtonClassName?: string;
}>;
const ModalComponents: Type = ({
  showModal,
  setShowModal,
  children,
  bgOpacity = "0.2",
  modalSize = "medium",
  title,
  subTitle,
  cancelable = true,
  costumeSize,
  animationType = "none",
  duration = 300,
  headClassName = "mt-2",
  childrenClassName = "p-4",
  cancelButtonClassName,
}) => {
  const handleClose = () => setShowModal(false);
  const slideInAnimation = useRef(new Animated.Value(hp(100))).current;

  useEffect(() => {
    return Animated.timing(slideInAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [showModal]);
  const handleModalClose = () => {
    Animated.timing(slideInAnimation, {
      toValue: hp(100),
      duration,
      useNativeDriver: true,
    }).start(() => {
      handleClose();
    });
  };

  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={showModal}
      onRequestClose={handleClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
        }}
      >
        <TouchableOpacity className="h-full" onPress={handleModalClose} />
        <Animated.View
          style={{
            transform: [{ translateY: slideInAnimation }],
            width: wp(100),
            height: hp(
              costumeSize
                ? costumeSize
                : modalSize == "medium"
                ? 50
                : modalSize == "small"
                ? 35
                : modalSize == "large"
                ? 70
                : modalSize == "full"
                ? 100
                : 50
            ),
          }}
          className={`${modalSize !== "full" ? "rounded-t-2xl" : ""} `}
        >
          <View className={`p-3 ${headClassName}`}>
            <View>
              {title && <Text className="mx-2 text-xl">{title}</Text>}
              {subTitle && <Text className="mx-2 text-lg">{subTitle}</Text>}
            </View>

            {cancelable && (
              <TouchableOpacity
                onPress={handleModalClose}
                className={getClassNames(
                  "absolute top-4 right-4",
                  cancelButtonClassName
                )}
              >
                <AntDesign name="close" size={25} />
              </TouchableOpacity>
            )}
            <View className={childrenClassName}>{children}</View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
export default ModalComponents;