import React from "react"
import { View } from "react-native"
import Text from "@components/reusable/Text"
import Container from "@src/components/reusable/Container"

const Home: React.FC = () => {
  return (
    <Container>
      <Text
        className="text-center mt-3 text-3xl text-orange-300 dark:text-orange-900"
        fontFamily="boldK24"
      >
        Home Page
      </Text>
    </Container>
  )
}

export default Home
