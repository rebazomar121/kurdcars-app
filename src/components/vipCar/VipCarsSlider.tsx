import React, { useState, useEffect, useRef } from "react"
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import Text from "@components/reusable/Text"
import { priceStringWithCurrencySymbol } from "@helpers/func"
import { useNavigation } from "@react-navigation/native"

type Type = React.FC<{
  items: any[]
}>

const VipCarsSlider: Type = ({ items }) => {
  const { width } = Dimensions.get("window")
  const height = width * 0.7
  const navigation: any = useNavigation()

  const [active, setActive] = useState(0)
  const scrollViewRef = useRef<ScrollView>(null)

  // Function to update active image index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => {
        const nextActive = prevActive === items.length - 1 ? 0 : prevActive + 1
        scrollViewRef.current?.scrollTo({
          x: width * nextActive,
          animated: true,
        })
        return nextActive
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [items.length, width])

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
        <Text className="text-white text-lg" fontFamily={"bold"}>
          VIP
        </Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        horizontal
        onScroll={onScrollChange}
        showsHorizontalScrollIndicator={false}
        style={{ width, height }}
      >
        {items.map((item, index) => (
          <TouchableOpacity
            onPress={() => {
              console.log("item", item)
              navigation.navigate("CarDetails", {
                item,
              })
            }}
          >
            <Image
              key={index}
              source={{ uri: item?.img }}
              style={{ width, height, resizeMode: "cover" }}
            />
            <View className="absolute z-20 bottom-4 right-4 p-2 bg-primary rounded-md">
              <Text className="text-lg text-white" fontFamily="bold">
                {priceStringWithCurrencySymbol(item?.price, item?.currency)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {items.map((_, k) => (
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

export default VipCarsSlider