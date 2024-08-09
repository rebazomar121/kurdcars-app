import React from "react"
import Layout from "@src/components/layout/Layout"
import ImageSlider from "@components/reusable/ImageSlider"
import ExplorerCar from "@src/components/car/ExplorerCar"
import Divider from "@src/components/reusable/Divider"
import ScrollRefresh from "@components/reusable/ScrollRefetch"

const images = [
  "https://www.carscoops.com/wp-content/uploads/2022/04/Ford-Taurus.jpg",
  "https://media.ed.edmunds-media.com/ford/explorer/2023/oem/2023_ford_explorer_4dr-suv_king-ranch_fq_oem_1_1600.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/2019_Ford_Fusion_Titanium_Energi%2C_front_2.29.20.jpg",
  "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/2020-dodge-charger-mmp-1-1567712643.jpg",
  "https://i.ibb.co/B3Jwqt3/coming-Soon.png",
]

const vipCars = [
  {
    img: "https://www.carscoops.com/wp-content/uploads/2022/04/Ford-Taurus.jpg",
    brandImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
    labels: ["Ford", "Ford", "New"],
    brand: "Ford",
    model: "Taurus",
    year: "2015",
    isNew: false,
    price: "23000",
    currency: "usd",
    metricAge: "13000",
    metricType: "km",
  },
  {
    img: "https://media.ed.edmunds-media.com/ford/explorer/2023/oem/2023_ford_explorer_4dr-suv_king-ranch_fq_oem_1_1600.jpg",
    brandImg:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
    labels: ["Ford", "Ford", "New"],
    brand: "Dodge",
    model: "Explorer",
    year: "2020",
    isNew: false,
    price: "43000000",
    currency: "iqd",
    metricAge: "3000",
    metricType: "mile",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/2020-dodge-charger-mmp-1-1567712643.jpg",
    brandImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dodge_logo_2010.png/1200px-Dodge_logo_2010.png",
    labels: ["Ford", "Ford", "New"],
    brand: "Dodge",
    model: "Charger",
    year: "2023",
    isNew: false,
    price: "43000",
    currency: "usd",
    metricAge: "3000",
    metricType: "mile",
  },
  {
    img: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
    brandImg:
      "https://seeklogo.com/images/M/Mercedes-Benz-logo-BD677D0B15-seeklogo.com.png3",
    labels: ["Ford", "Ford", "New"],
    brand: "Mercedes",
    model: "CLS",
    year: "2019",
    isNew: false,
    price: "53000",
    currency: "usd",
    metricAge: "32000",
    metricType: "km",
  },
  {
    img: "https://i.ibb.co/B3Jwqt3/coming-Soon.png",
    brandImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Dodge_logo_2010.png/1200px-Dodge_logo_2010.png",
    labels: ["Ford", "Ford", "New"],
    brand: "Dodge",
    model: "Charger",
    year: "2023",
    isNew: false,
    price: "43000",
    currency: "usd",
    metricAge: "3000",
    metricType: "mile",
  },
]

const Home: React.FC = () => {
  return (
    <Layout>
      <ScrollRefresh marginBottom={0}>
        <ImageSlider items={vipCars} />
        <Divider classNameDivider="my-4" showTooltip={false} />
        <ExplorerCar />
      </ScrollRefresh>
    </Layout>
  )
}

export default Home
