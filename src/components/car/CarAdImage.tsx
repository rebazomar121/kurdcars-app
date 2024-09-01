import React from "react";
import { Image, Dimensions, View } from "react-native";

type Type = React.FC<{
  src: string;
}>;

const CarAdImage: Type = ({ src }) => {
  const { width } = Dimensions.get("window");
  const height = width * 0.4;

  return (
    <View className="flex flex-row justify-center ">
      <Image
        src={src}
        style={{
          width: width * 0.92,
          height,
          resizeMode: "cover",
          padding: 16,
          borderRadius: 4,
        }}
      />
    </View>
  );
};

export default CarAdImage;
