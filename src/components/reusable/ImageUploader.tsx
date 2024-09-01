import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Platform,
  Pressable,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import ImageView from "react-native-image-viewing";

type Type = React.FC<{
  classNameContainer?: string;
  allowsMultipleSelection?: boolean;
}>;

const ImageUploader: Type = ({
  classNameContainer,
  allowsMultipleSelection = true,
}) => {
  const [images, setImages] = useState<any[]>([]);
  const [primaryIndex, setPrimaryIndex] = useState<number>(0);
  const [showImage, setShowImage] = useState<{
    visible: boolean;
    index: number;
    uri: string;
  }>({
    visible: false,
    index: 0,
    uri: "",
  });

  const pickImage = async () => {
    // Request camera roll permissions
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }

    // Open the image picker
    const result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
      exif: false,
      allowsMultipleSelection,
      selectionLimit: 9,
      legacy: false,
      orderedSelection: true,
    });

    console.log(result?.assets);
    if (!result?.assets || result?.assets?.length <= 0) return;

    if (!result.cancelled) {
      setImages(result?.assets);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <View className={`space-y-4 ${classNameContainer}`}>
      <TouchableOpacity
        className=" py-8 px-4 rounded-md flex-row justify-center items-center"
        onPress={pickImage}
        style={{
          borderStyle: "dashed",
          borderWidth: 1,
          borderColor: "#573CDA",
        }}
      >
        <Feather name="camera" size={24} color="#573CDA" />
        <Text className="ml-2 text-primary">
          {images?.length > 0 ? "Add More Images" : "Add Images"}
        </Text>
      </TouchableOpacity>

      <View>
        {images?.length > 0 && (
          <View
            className=""
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {images?.map((image: any, index: number) => (
              <View
                style={{
                  width: "46%",
                }}
                className="border rounded-md my-2"
              >
                <Pressable
                  key={index}
                  style={{
                    width: "100%",
                    marginBottom: 4,
                  }}
                  onPress={() => {
                    setShowImage({
                      visible: true,
                      index: index,
                      uri: image?.uri,
                    });
                  }}
                >
                  <Image
                    source={{ uri: image?.uri }}
                    className="rounded-t-md"
                    style={{ width: "100%", height: 140, resizeMode: "cover" }}
                  />
                </Pressable>
                <View className="flex-row justify-between items-center">
                  <TouchableOpacity className="flex-row justify-between items-center p-1">
                    <AntDesign
                      name="delete"
                      size={24}
                      color="red"
                      onPress={() => {
                        removeImage(index);
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-row justify-between items-center p-1"
                    onPress={() => {
                      setPrimaryIndex(index);
                    }}
                  >
                    {primaryIndex === index ? (
                      <Text className="text-primary">Primary</Text>
                    ) : (
                      <Text>Set Primary</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
      <ImageView
        images={[showImage]}
        imageIndex={showImage?.index}
        visible={showImage?.visible}
        onRequestClose={() => {
          setShowImage({ ...showImage, visible: false });
        }}
      />
    </View>
  );
};

export default ImageUploader;

// {"assets": [{"assetId": "F11AAE1E-1569-46D6-A32B-9F72404A2F60/L0/001", "base64": null, "duration": null, "exif": null, "fileName": "IMG_0123.png", "fileSize": 7900978, "height": 2436, "mimeType": "image/png", "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/6723FB52-588F-4402-8C3D-357AF0E99D65/Library/Caches/ExponentExperienceData/@anonymous/kurdcars-app-f121d99d-01dd-427a-9e17-b3d18565c819/ImagePicker/4A7314B5-C604-4CD5-A2E1-D14CEAAD67B3.png", "width": 1125}, {"assetId": "3F475B48-BA69-4610-AC5B-D7B85689ED5B/L0/001", "base64": null, "duration": null, "exif": null, "fileName": "IMG_0116.png", "fileSize": 8315060, "height": 2436, "mimeType": "image/png", "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/6723FB52-588F-4402-8C3D-357AF0E99D65/Library/Caches/ExponentExperienceData/@anonymous/kurdcars-app-f121d99d-01dd-427a-9e17-b3d18565c819/ImagePicker/F9AEDD8F-61D5-41BE-9E7C-C3EEA1DB1EAE.png", "width": 1125}, {"assetId": "0CE13091-08B0-4EC7-A107-D2456265C6A1/L0/001", "base64": null, "duration": null, "exif": null, "fileName": "IMG_0121.png", "fileSize": 8246637, "height": 2436, "mimeType": "image/png", "type": "image", "uri": "file:///var/mobile/Containers/Data/Application/6723FB52-588F-4402-8C3D-357AF0E99D65/Library/Caches/ExponentExperienceData/@anonymous/kurdcars-app-f121d99d-01dd-427a-9e17-b3d18565c819/ImagePicker/91678B28-013F-433B-B0DB-B4A9E859CFD8.png", "width": 1125}], "canceled": false}
