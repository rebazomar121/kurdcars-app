import React from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Container from "@src/components/reusable/Container";
import { images, vipCars, carFutureList } from "@helpers/fakeData";
import { useNavigation } from "@react-navigation/native";
import CarDetailComponent from "@components/car/CarDetailComponent";
import FixedCallNow from "@src/components/car/FixedCallNow";
import Layout from "@src/components/layout/Layout";
import VipCarsSlider from "@components/vipCar/VipCarsSlider";
import ExplorerCar from "@src/components/car/ExplorerCar";
import Divider from "@src/components/reusable/Divider";
import Text from "@components/reusable/Text";

const OfferPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <ScrollRefresh marginBottom={0}>
        {/* <VipCarsSlider items={vipCars} /> */}
        {/* <Divider classNameDivider="my-4" showTooltip={false} /> */}
        {/* <ExplorerCar /> */}
        <Text>Hi</Text>
      </ScrollRefresh>
    </Layout>
  );
};

export default OfferPage;
