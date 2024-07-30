import React from "react"
import Text from "@components/reusable/Text"
import Container from "@src/components/reusable/Container"
import Layout from "@src/components/layout/Layout"
import ImageSlider from "@components/reusable/ImageSilder"

const images = [
  "https://www.carscoops.com/wp-content/uploads/2022/04/Ford-Taurus.jpg",
  "https://media.ed.edmunds-media.com/ford/explorer/2023/oem/2023_ford_explorer_4dr-suv_king-ranch_fq_oem_1_1600.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg",
  "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/2020-dodge-charger-mmp-1-1567712643.jpg",
  "https://i.ibb.co/B3Jwqt3/coming-Soon.png",
]

const Home: React.FC = () => {
  return (
    <Layout>
      <ImageSlider images={images} />
    </Layout>
  )
}

export default Home
