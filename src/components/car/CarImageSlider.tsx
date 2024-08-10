import React, { useState, useEffect, useRef } from "react"
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import Text from "@components/reusable/Text"
import Feather from "@expo/vector-icons/Feather"
import AntDesign from "@expo/vector-icons/AntDesign"
import Entypo from "@expo/vector-icons/Entypo"
import ImageView from "react-native-image-viewing"
import { imagesListForImageView } from "@helpers/fakeData"

type Type = React.FC<{
  images: string[]
  vip?: boolean
  onPressBack?: () => void
}>

const CarImageSlider: Type = ({ images, vip, onPressBack }) => {
  const { width } = Dimensions.get("window")
  const height = width * 0.7
  const [active, setActive] = useState(0)
  const scrollViewRef = useRef<ScrollView>(null)
  const [visible, setIsVisible] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  // Function to update active image index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => {
        const nextActive = prevActive === images.length - 1 ? 0 : prevActive + 1
        scrollViewRef.current?.scrollTo({
          x: width * nextActive,
          animated: true,
        })
        return nextActive
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length, width])

  const onScrollChange = ({ nativeEvent }: any) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    )
    if (slide !== active) {
      setActive(slide)
    }
  }

  return (
    <View className="">
      <TouchableOpacity
        onPress={onPressBack}
        className="absolute z-20 top-2 left-2  p-2 rounded-b-md bg-white rounded-full"
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="absolute  z-20 top-2 right-2  p-2 rounded-b-md bg-white rounded-full">
        <Feather name="heart" size={24} color="black" />
      </TouchableOpacity>
      <View className="absolute z-20 top-2 right-14  p-2 rounded-b-md bg-white rounded-full">
        <Entypo name="share" size={24} color="black" />
      </View>
      {vip && (
        <View className="absolute z-20 left-20 p-2 rounded-b-md bg-primary ">
          <Text className="text-white text-lg" fontFamily={"bold"}>
            VIP
          </Text>
        </View>
      )}
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {images.map((image, index) => (
          <TouchableOpacity
            onPress={() => {
              setIsVisible(true)
              setImageIndex(index)
            }}
          >
            <Image
              key={index}
              source={{ uri: image }}
              style={{ width, height, resizeMode: "cover" }}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, k) => (
          <Text
            key={k}
            style={k == active ? styles.activeDot : styles.dot}
            className=""
            fontFamily={"bold"}
          >
            •
          </Text>
        ))}
      </View>
      <ImageView
        images={imagesListForImageView}
        imageIndex={imageIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: -15,
    alignSelf: "center",
  },
  dot: {
    color: "#888",
    fontSize: 50,
  },
  activeDot: {
    color: "#FFF",
    fontSize: 50,
  },
})

export default CarImageSlider
