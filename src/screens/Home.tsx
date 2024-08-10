import React from "react"
import Layout from "@src/components/layout/Layout"
import VipCarsSlider from "@components/vipCar/VipCarsSlider"
import ExplorerCar from "@src/components/car/ExplorerCar"
import Divider from "@src/components/reusable/Divider"
import ScrollRefresh from "@components/reusable/ScrollRefetch"
import { images, vipCars } from "@helpers/fakeData"

const Home: React.FC = () => {
  return (
    <Layout>
      <ScrollRefresh marginBottom={0}>
        <VipCarsSlider items={vipCars} />
        <Divider classNameDivider="my-4" showTooltip={false} />
        <ExplorerCar />
      </ScrollRefresh>
    </Layout>
  )
}

export default Home
