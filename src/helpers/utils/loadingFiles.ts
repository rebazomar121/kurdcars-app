import * as Font from "expo-font"

export const fontLoader = async ({
  setFontsLoaded,
}: {
  setFontsLoaded: (loaded: boolean) => void
}): Promise<void> => {
  await Font.loadAsync({
    regularK24: require("../../../assets/fonts/K24KurdishLight-Light.ttf"),
    boldK24: require("../../../assets/fonts/K24KurdishBold-Bold.ttf"),
  })
  setFontsLoaded(true)
}
