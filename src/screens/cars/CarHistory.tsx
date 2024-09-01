import React from "react";
import { View } from "react-native";
import Layout from "@src/components/layout/Layout";
import VipCarsSlider from "@components/vipCar/VipCarsSlider";
import ExplorerCar from "@src/components/car/ExplorerCar";
import Divider from "@src/components/reusable/Divider";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import { images, vipCars } from "@helpers/fakeData";
import Container from "@src/components/reusable/Container";
import BackNavbar from "@src/components/layout/BackNavbar";

const CarList: React.FC = () => {
  return (
    <Container>
      <ScrollRefresh marginBottom={0} height="100%">
        <BackNavbar title="History" />
        <View className="my-4" />

        <ExplorerCar />
      </ScrollRefresh>
    </Container>
  );
};

export default CarList;
