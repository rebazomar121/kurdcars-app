import React, { useState, useRef } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Text from "./Text";

type Type = React.FC<{
  onChangePhoneNumber: (phoneNumber: string) => void;
  defaultValue?: string;
}>;

const PhoneNumberInput: Type = ({ onChangePhoneNumber, defaultValue }) => {
  const [phoneNumber, setPhoneNumber] = useState(
    defaultValue ? defaultValue : ""
  );
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef<PhoneInput>(null);

  const handlePhoneNumberChange = (number: any) => {
    setPhoneNumber(number);
    onChangePhoneNumber(number);
  };

  return (
    <View className="w-full p-4">
      <Text className="text-xl" fontFamily={"bold"}>
        Phone number
      </Text>

      <PhoneInput
        ref={phoneInput}
        defaultValue={value}
        defaultCode="IQ"
        layout="first"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        containerStyle={{
          width: "100%",
          marginBottom: 10,
          borderRadius: 8,
        }}
        textContainerStyle={{
          backgroundColor: "white",
          borderRadius: 8,
        }}
        textInputStyle={{
          backgroundColor: "white",
          borderRadius: 8,
        }}
        placeholder="Enter phone number"
        withDarkTheme
        withShadow
        autoFocus
      />
    </View>
  );
};

export default PhoneNumberInput;
