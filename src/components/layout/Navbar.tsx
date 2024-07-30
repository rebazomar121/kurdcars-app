import React from "react"
import { View } from "react-native"
import ButtonWithIcon from "@components/reusable/ButtonWithIcon"
import InputWithIcon from "@components/reusable/InputWithIcon"
import { FilterIcon, SearchIcon, LocationIcon } from "@helpers/utils/Icons"

type Type = React.FC<{}>

const Navbar: Type = () => {
  return (
    <View className="flex  flex-row justify-between items-center p-4">
      <ButtonWithIcon
        Icon={<LocationIcon />}
        onClick={() => console.log("Filter Clicked")}
        classNameButton="bg-white border-gray-400 border"
      />
      <InputWithIcon
        onChange={(e) => console.log("Search Changed")}
        Icon={<SearchIcon />}
      />
      <ButtonWithIcon
        Icon={<FilterIcon />}
        onClick={() => console.log("Filter Clicked")}
        classNameButton="bg-primary"
      />
    </View>
  )
}

export default Navbar
