import React from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import {
  companyCarShop,
  newestCarCarts,
  typeOfCars,
  carsList,
} from "@helpers/fakeData";
import Layout from "@src/components/layout/Layout";
import Text from "@components/reusable/Text";
import CompanyProfileCart from "@src/components/profile/CompanyProfileCart";
import HorizontalScrollView from "@src/components/reusable/HorizontalScrollView";
import { View } from "react-native";
import CarAdImage from "@src/components/car/CarAdImage";
import NewCarCart from "@src/components/car/NewCarCart";
import TypeCarCart from "@src/components/car/TypeCarCart";
import Divider from "@src/components/reusable/Divider";
import VerticalCarCart from "@src/components/car/VerticalCarCart";

const OfferPage: React.FC = () => {

  return (
    <Layout>
      <ScrollRefresh marginBottom={0}>
        <View className="">
          <Text className="text-lg px-4" fontFamily={"bold"}>
            Companies
          </Text>
          <HorizontalScrollView>
            {companyCarShop?.map((item, index) => (
              <CompanyProfileCart
                name={item.name}
                img={item.img}
                location={item.location}
              />
            ))}
          </HorizontalScrollView>
        </View>
        <Divider classNameDivider="bg-gray-200 my-4" height="h-[1px]" />
        <CarAdImage src="https://bzmrentacar.com/Car-Images/d6fbf18d-457c-4886-9a29-b1eeab7b1005-.jpg" />
        <View>
          <Text className="text-lg px-4 my-4" fontFamily={"bold"}>
            Newest Cars
          </Text>
        </View>
        <HorizontalScrollView>
          {newestCarCarts?.map((item, index) => (
            <NewCarCart name={item.name} img={item.img} />
          ))}
        </HorizontalScrollView>
        <Divider classNameDivider="bg-gray-200 my-4" height="h-[1px]" />
        <CarAdImage src="https://d1hv7ee95zft1i.cloudfront.net/custom/targeted-ads/mobile/66b3393bb8c95.jpg" />

        <View className="">
          <Text className="text-lg px-4 my-4" fontFamily={"bold"}>
            Type of Cars
          </Text>

          <HorizontalScrollView>
            {typeOfCars?.map((item, index) => (
              <TypeCarCart name={item.name} img={item.img} />
            ))}
          </HorizontalScrollView>
        </View>

        <Divider classNameDivider="bg-gray-200 my-4" height="h-[1px]" />
        <CarAdImage src="https://bzmrentacar.com/Car-Images/d6fbf18d-457c-4886-9a29-b1eeab7b1005-.jpg" />

        <View className="">
          <Text className="text-lg px-4 my-4" fontFamily={"bold"}>
            Specialist For You
          </Text>
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
        </View>

        <View className="mb-32" />
      </ScrollRefresh>
    </Layout>
  );
};

export default OfferPage;