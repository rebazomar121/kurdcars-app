import React from "react";
import Layout from "@src/components/layout/Layout";
import VipCarsSlider from "@components/vipCar/VipCarsSlider";
import ExplorerCar from "@src/components/car/ExplorerCar";
import Divider from "@src/components/reusable/Divider";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import { vipCars, carsList } from "@helpers/fakeData";
import HorizontalScrollView from "@src/components/reusable/HorizontalScrollView";
import VerticalCarCart from "@src/components/car/VerticalCarCart";
import Text from "@src/components/reusable/Text";
import CarAdImage from "@src/components/car/CarAdImage";


const Home: React.FC = () => {
  return (
    <Layout>
      <ScrollRefresh marginBottom={0}>
        <VipCarsSlider items={vipCars} />
        <Divider classNameDivider="bg-gray-200 my-4" height="h-[1px]" />
        <HorizontalScrollView>
          {carsList.map((car, index) => {
            return (
              <VerticalCarCart
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
        </HorizontalScrollView>
        <Divider classNameDivider="bg-gray-200 my-4" height="h-[1px]" />
        <CarAdImage src="https://bzmrentacar.com/Car-Images/d6fbf18d-457c-4886-9a29-b1eeab7b1005-.jpg" />

        <ExplorerCar />
      </ScrollRefresh>
    </Layout>
  );
};

export default Home;
