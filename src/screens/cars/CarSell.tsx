import React, { useState } from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Container from "@src/components/reusable/Container";
import SellingCarForm from "@src/components/car/SellingCarForm";
import PrimaryCartWithText from "@src/components/layout/PrimaryCartWithText";
import BackNavbar from "@src/components/layout/BackNavbar";

const CarSell: React.FC = () => {
  const [inputData, setInputData] = useState<any>();

  return (
    <Container classNameContainer="none">
      <ScrollRefresh marginBottom={0} height="100%">
        <BackNavbar title="Selling Car" />
        <PrimaryCartWithText title="Enter Car Details" />
        <SellingCarForm inputData={inputData} setInputData={setInputData} />
      </ScrollRefresh>
    </Container>
  );
};

export default CarSell;
