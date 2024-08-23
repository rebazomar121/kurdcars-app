import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  View,
  TextInput,
  I18nManager,
} from "react-native";
import { Text } from "react-native";

type OtpInputProps = {
  code: string;
  onChange: (code: string) => void;
  maximumLength: number;
  setIsPinReady: (isPinReady: boolean) => void;
  isPinReady: boolean;
};

const OtpInput = ({
  code,
  onChange,
  maximumLength,
  setIsPinReady,
  isPinReady,
}: OtpInputProps) => {
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const inputRef = useRef<TextInput | null>(null);
  const boxArray = new Array(maximumLength).fill(0);

  const handleOnPress = () => {
    setIsInputBoxFocused(true);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  const boxDigit = (_: number, index: number) => {
    const emptyInput = "";
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <View
        key={index.toString()}
        className={`${
          isInputBoxFocused && isValueFocused
            ? "bg-gray-200 border-red-300"
            : "border-gray-300 "
        } border-2 rounded-md p-3 min-w-[50px] `}
      >
        <Text className="text-xl text-center text-gray-400">{digit}</Text>
      </View>
    );
  };

  useEffect(() => {
    setIsPinReady(code.length === maximumLength);
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  useEffect(() => {
    if (isPinReady) {
      setIsInputBoxFocused(false);
      Keyboard.dismiss();
    }
  }, [isPinReady]);

  return (
    <View className="justify-center items-center w-full">
      <Pressable
        className={`h-14 ${
          I18nManager.isRTL ? "flex-row-reverse" : "flex-row"
        } w-full justify-evenly`}
        onPress={handleOnPress}
      >
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        className="w-full border-gray-400 border rounded-md p-4 absolute opacity-0 -z-10"
        value={code}
        onChangeText={
          onChange
            ? (text) => {
                onChange(text);
              }
            : undefined
        }
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="number-pad"
      />
    </View>
  );
};

export default OtpInput;
