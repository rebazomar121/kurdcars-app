import React from "react";
import { View } from "react-native";
import CarSmallComponent from "./CarSmallComponent";
import { carsList } from "@helpers/fakeData";

type Type = React.FC<{}>;
const ExplorerCar: Type = () => {
  return (
    <View className="mx-4 mb-16">
      {carsList.map((car, index) => {
        return (
          <CarSmallComponent
            key={index}
            title={car.title}
            location={car.location}
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
        );
      })}
    </View>
  );
};

export default ExplorerCar;
