import React from "react";
import { View } from "react-native";
import Layout from "@src/components/layout/Layout";
import ExplorerCar from "@src/components/car/ExplorerCar";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import BackNavbar from "@src/components/layout/BackNavbar";

const FavoriteCar: React.FC = () => {
  return (
    <Layout showHeader={false}>
      <ScrollRefresh marginBottom={0} height="97.6%">
        <BackNavbar title="Favorite Cars" />
        <View className="my-4" />

        <ExplorerCar />
        <View className="mb-32" />
      </ScrollRefresh>
    </Layout>
  );
};

export default FavoriteCar;
