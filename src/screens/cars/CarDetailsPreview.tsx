import React from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Container from "@src/components/reusable/Container";
import { images, carFutureList } from "@helpers/fakeData";
import { useNavigation } from "@react-navigation/native";
import CarDetailComponent from "@components/car/CarDetailComponent";
import FixedCallNow from "@src/components/car/FixedCallNow";
import PrimaryCartWithText from "@components/layout/PrimaryCartWithText";

const CarDetails: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ScrollRefresh marginBottom={50}>
        <PrimaryCartWithText title="Preview the post" fit={true} />

        <CarDetailComponent
          images={images}
          onClickBack={() => {
            navigation.goBack();
          }}
          carFutureList={carFutureList}
        />
      </ScrollRefresh>

      <FixedCallNow phoneNumber="07501231232" whatsappNumber="07501231232" />
    </Container>
  );
};

export default CarDetails;
