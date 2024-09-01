import React, { useState } from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import { View } from "react-native";
import ModalComponents from "../reusable/Modal";
import { SelectList } from "react-native-dropdown-select-list";
import Divider from "@src/components/reusable/Divider";
import Switcher from "../reusable/Switcher";
import { useNavigation } from "@react-navigation/native";
import {
  cites,
  engines,
  cylindersList,
  enginesList,
  currencyList,
  evMotors,
  transmissionList,
  regionList,
  carBrandsList,
  years,
  plateCountryList,
  plateCityList,
  carStatusList,
  toyotaCarModels,
} from "../../helpers/fakeData";
import Input from "@src/components/reusable/Input";
import Button from "@components/reusable/Button";

type Type = React.FC<{
  showCarFilters: boolean;
  setShowCarFilters: any;
}>;

const CarFilters: Type = ({ showCarFilters, setShowCarFilters }) => {
  const navigation: any = useNavigation();
  const [filters, setFilters] = useState<any>();
  return (
    <View>
      {showCarFilters && (
        <ModalComponents
          title="Filters"
          subTitle="Choose the filters you want and find car"
          showModal={showCarFilters}
          setShowModal={setShowCarFilters}
          cancelButtonClassName="absolute top-12 right-4"
          headClassName="bg-white h-full pt-14"
          childrenClassName=""
          modalSize="full"
        >
          <Divider height="h-[2px] bg-primary" />
          <ScrollRefresh marginBottom={0} height="90%">
            <Text className="text-xl">Cites</Text>
            <SelectList
              dropdownStyles={{
                width: "100%",
              }}
              dropdownTextStyles={{
                textAlign: "left",
              }}
              placeholder={"Cites"}
              boxStyles={{
                width: "100%",
              }}
              fontFamily="bold"
              setSelected={(val: any) => {
                setFilters({ ...filters, city: val });
              }}
              defaultOption={{
                key: cites[0].key,
                value: cites[0].value,
              }}
              data={cites}
              save="key"
              search={true}
            />
            <View className="my-4">
              <Switcher
                onChange={(val: any) => {
                  setFilters({ ...filters, brand: val });
                }}
                buttonsList={carBrandsList}
                label="Brand"
                inactiveClassName="bg-gray-100"
              />

              {filters?.brand && (
                <Switcher
                  onChange={(val: any) => {
                    setFilters({ ...filters, brand: val });
                  }}
                  buttonsList={toyotaCarModels}
                  label="Model"
                  inactiveClassName="bg-gray-100"
                />
              )}
            </View>
            <Switcher
              onChange={(val: any) => {
                setFilters({ ...filters, typeOfEngine: val });
              }}
              buttonsList={enginesList}
              label="Type of Engine"
              inactiveClassName="bg-gray-100"
            />

            {filters?.typeOfEngine === "ev" ? (
              <>
                <Switcher
                  onChange={(val: any) => {
                    setFilters({ ...filters, evMotors: val });
                  }}
                  buttonsList={evMotors}
                  label="Motors"
                  inactiveClassName="bg-gray-100"
                />
              </>
            ) : (
              <>
                <View className="my-4">
                  <Text className="text-xl">Engine Size</Text>
                  <SelectList
                    dropdownStyles={{
                      width: "100%",
                    }}
                    dropdownTextStyles={{
                      textAlign: "left",
                    }}
                    placeholder={"Engine"}
                    boxStyles={{
                      width: "100%",
                    }}
                    fontFamily="bold"
                    setSelected={(val: any) => {
                      console.log("val", val);
                      setFilters({ ...filters, engine: val });
                    }}
                    defaultOption={{
                      key: engines[0].key,
                      value: engines[0].value,
                    }}
                    data={engines}
                    save="key"
                    search={true}
                  />
                </View>

                <Switcher
                  onChange={(val: any) => {
                    setFilters({ ...filters, cylinders: val });
                  }}
                  buttonsList={cylindersList}
                  label="Cylinders"
                  inactiveClassName="bg-gray-100"
                />

                <Switcher
                  onChange={(val: any) => {
                    setFilters({ ...filters, transmission: val });
                  }}
                  buttonsList={transmissionList}
                  label="Transmission"
                  inactiveClassName="bg-gray-100"
                />
              </>
            )}

            <Switcher
              onChange={(val: any) => {
                setFilters({ ...filters, currency: val });
              }}
              buttonsList={currencyList}
              label="Currency"
              inactiveClassName="bg-gray-100"
            />

            <View className="flex flex-row justify-around">
              <Input
                onChange={(e: any) => {
                  setFilters({ ...filters, price: e });
                }}
                placeholder="Min Price"
                classNameContainer="w-[45%]"
                label="Price"
                type="number-pad"
              />

              <Input
                onChange={(e: any) => {
                  setFilters({ ...filters, price: e });
                }}
                placeholder="Max Price"
                classNameContainer="w-[45%]"
                label="Price"
                type="number-pad"
              />
            </View>
            <Switcher
              onChange={(val: any) => {
                setFilters({ ...filters, region: val });
              }}
              buttonsList={regionList}
              label="Region List"
            />
            <View className="my-4">
              <Text className="text-xl">Year</Text>
              <SelectList
                dropdownStyles={{
                  width: "100%",
                }}
                dropdownTextStyles={{
                  textAlign: "left",
                }}
                placeholder={"Year"}
                boxStyles={{
                  width: "100%",
                }}
                fontFamily="bold"
                setSelected={(val: any) => {
                  setFilters({ ...filters, year: val });
                }}
                defaultOption={{
                  key: years[0].key,
                  value: years[0].value,
                }}
                data={years}
                save="key"
                search={true}
              />
            </View>
            <Switcher
              onChange={(val: any) => {
                setFilters({ ...filters, plateType: val });
              }}
              buttonsList={plateCountryList}
              label="Plate Type"
            />

            {filters?.plateType === "iraq" && (
              <>
                <Switcher
                  onChange={(val: any) => {
                    setFilters({ ...filters, cityPlate: val });
                  }}
                  buttonsList={plateCityList}
                  label="City Plate"
                />
              </>
            )}

            <Switcher
              onChange={(val: any) => {
                setFilters({ ...filters, carStatus: val });
              }}
              buttonsList={carStatusList}
              label="Car Status"
            />

            <Button
              onClick={() => {
                navigation.navigate("Home")
                setShowCarFilters(!showCarFilters);
              }}
              classNameButton="bg-primary"
              title="Find Cars"
            />

            <View className="mb-20" />
          </ScrollRefresh>
        </ModalComponents>
      )}
    </View>
  );
};

export default CarFilters;
