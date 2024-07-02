import { screens } from "@constants/screens.const"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

const authScreens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {screens?.map((screen: any, index: any) => {
        return (
          <Stack.Screen
            key={index}
            name={screen?.name}
            component={screen?.component}
            options={screen?.options}
          />
        )
      })}
    </Stack.Navigator>
  )
}

export default authScreens
