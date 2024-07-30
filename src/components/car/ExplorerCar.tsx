import React from "react"
import { View } from "react-native"
import CarSmallComponent from "./CarSmallComponent"

type Type = React.FC<{}>

let carsList = [
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
      "https://seeklogo.com/images/M/Mercedes-Benz-logo-BD677D0B15-seeklogo.com.png",
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
]

const ExplorerCar: Type = () => {
  return (
    <View className="mx-4 h-full mb-16">
      {carsList.map((car, index) => {
        return (
          <CarSmallComponent
            key={index}
            img={car.img}
            brandImg={car.brandImg}
            labels={car.labels}
            brand={car.brand}
            model={car.model}
            year={car.year}
            isNew={car.isNew}
            price={car.price}
            currency={car.currency}
            metricAge={car.metricAge}
            metricType={car.metricType}
          />
        )
      })}
    </View>
  )
}

export default ExplorerCar
