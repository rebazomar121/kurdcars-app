import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { cites } from "../../helpers/fakeData";
import { SelectList } from "react-native-dropdown-select-list";
import ImageUploader from "../reusable/ImageUploader";

type Type = React.FC<{
  inputData: any;
  setInputData: any;
}>;

const SellingCarForm: Type = ({ inputData, setInputData }) => {
  const navigation = useNavigation();

  return (
    <View className="p-4">
      <SelectList
        dropdownStyles={{
          width: "100%",
        }}
        dropdownTextStyles={{
          textAlign: "left",
        }}
        placeholder={"Cites"}
        boxStyles={{
          width: "100%",
        }}
        fontFamily="rabar"
        setSelected={(val: any) => {
          setInputData({ ...inputData, city: val });
        }}
        defaultOption={{
          key: cites[0].key,
          value: cites[0].value,
        }}
        data={cites}
        save="key"
        search={true}
      />

      <ImageUploader classNameContainer="mt-4" />
    </View>
  );
};

export default SellingCarForm;
