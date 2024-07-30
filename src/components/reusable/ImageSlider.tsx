import React, { useState, useEffect, useRef } from "react"
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Text,
} from "react-native"

type Type = React.FC<{
  images: string[]
}>

const ImageSlider: Type = ({ images }) => {
  const { width } = Dimensions.get("window")
  const height = width * 0.7

  const [active, setActive] = useState(0)
  const scrollViewRef = useRef<ScrollView>(null)

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
      <View className="absolute z-20 left-8 p-2 rounded-b-md bg-primary ">
        <Text className="text-white">VIP</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width, height, resizeMode: "cover" }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, k) => (
          <Text key={k} style={k == active ? styles.activeDot : styles.dot}>
            •
          </Text>
        ))}
      </View>
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

export default ImageSlider
