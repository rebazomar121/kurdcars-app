import Reacts from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import {
  cites,
  engines,
  cylindersList,
  enginesList,
  currencyList,
  evMotors,
  transmissionList,
  metricsList,
  regionList,
  carBrandsList,
  years,
  colorsList,
  paintedParts,
  numberOfSets,
  plateCountryList,
  plateCityList,
  carStatusList,
  toyotaCarModels,
} from "../../helpers/fakeData";
import ImageUploader from "../reusable/ImageUploader";
import Input from "@src/components/reusable/Input";
import Switcher from "../reusable/Switcher";
import ColorSelector from "../reusable/ColorSelector";
import Text from "../reusable/Text";
import ButtonWithIcon from "@components/reusable/ButtonWithIcon";
import Button from "@components/reusable/Button";

type Type = React.FC<{
  inputData: any;
  setInputData: any;
  onPost?: any;
}>;

const SellingCarForm: Type = ({ inputData, setInputData, onPost }) => {
  const navigation: any = useNavigation();
  return (
    <View className="p-4 mb-72">
      <View>
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
            setInputData({ ...inputData, city: val });
          }}
          defaultOption={{
            key: cites[0].key,
            value: cites[0].value,
          }}
          data={cites}
          save="key"
          search={true}
        />
      </View>

      <ImageUploader classNameContainer="my-4" />

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, currency: val });
        }}
        buttonsList={currencyList}
        label="Currency"
      />

      <Input
        onChange={(e: any) => {
          setInputData({ ...inputData, price: e });
        }}
        placeholder="Price"
        label="Price"
        type="number-pad"
      />

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, typeOfEngine: val });
        }}
        buttonsList={enginesList}
        label="Type of Engine"
      />

      {inputData?.typeOfEngine === "ev" ? (
        <>
          <Switcher
            onChange={(val: any) => {
              setInputData({ ...inputData, evMotors: val });
            }}
            buttonsList={evMotors}
            label="Motors"
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
                setInputData({ ...inputData, engine: val });
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
              setInputData({ ...inputData, cylinders: val });
            }}
            buttonsList={cylindersList}
            label="Cylinders"
          />

          <Switcher
            onChange={(val: any) => {
              setInputData({ ...inputData, transmission: val });
            }}
            buttonsList={transmissionList}
            label="Transmission"
          />
        </>
      )}

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, metricType: val });
        }}
        buttonsList={metricsList}
        label="Type Of Metric"
      />

      <Input
        onChange={(e: any) => {
          setInputData({ ...inputData, metricAge: e });
        }}
        placeholder="Metric Age"
        label="Metric Age"
        type="number-pad"
      />

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, region: val });
        }}
        buttonsList={regionList}
        label="Region List"
      />

      <View className="my-4">
        <Switcher
          onChange={(val: any) => {
            setInputData({ ...inputData, brand: val });
          }}
          buttonsList={carBrandsList}
          label="Brand"
        />

        {inputData?.brand && (
          <Switcher
            onChange={(val: any) => {
              setInputData({ ...inputData, brand: val });
            }}
            buttonsList={toyotaCarModels}
            label="Model"
          />
        )}
      </View>

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
            setInputData({ ...inputData, year: val });
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

      <Input
        onChange={(e: any) => {
          setInputData({ ...inputData, packageName: e });
        }}
        placeholder="Package Name"
        label="Package Name"
        type="default"
      />

      <ColorSelector
        onChange={(value) => {
          setInputData({ ...inputData, color: value });
        }}
        colorsList={colorsList}
        label="Select Car Color"
      />

      <Input
        onChange={(e: any) => {
          setInputData({ ...inputData, colorName: e });
        }}
        placeholder="Color Name"
        label="Color Name"
        type="default"
      />

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, paintedPart: val });
        }}
        buttonsList={paintedParts}
        label="Painted Parts"
      />

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, numberOfSets: val });
        }}
        buttonsList={numberOfSets}
        label="Number Of Sets"
      />

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, plateType: val });
        }}
        buttonsList={plateCountryList}
        label="Plate Type"
      />

      {inputData?.plateType === "iraq" && (
        <>
          <Switcher
            onChange={(val: any) => {
              setInputData({ ...inputData, cityPlate: val });
            }}
            buttonsList={plateCityList}
            label="City Plate"
          />
        </>
      )}

      <Switcher
        onChange={(val: any) => {
          setInputData({ ...inputData, carStatus: val });
        }}
        buttonsList={carStatusList}
        label="Car Status"
      />

      <Input
        onChange={(e: any) => {
          setInputData({ ...inputData, phoneNumber: e });
        }}
        placeholder="Phone Number"
        label="Phone Number"
        type="number-pad"
      />

      <Input
        onChange={(e: any) => {
          setInputData({ ...inputData, whatsAppNumber: e });
        }}
        placeholder="Whatsapp Number"
        label="Whatsapp Number"
        type="number-pad"
      />

      <Input
        onChange={(e: any) => {
          setInputData({ ...inputData, note: e });
        }}
        placeholder="Note"
        label="Note"
        type="default"
        multiline={true}
        numberOfLines={10}
      />

      <Button
        onClick={() => {
          navigation.navigate("CarDetailsPreview");
        }}
        classNameButton="bg-primary"
        title="Preview"
      />
    </View>
  );
};

export default SellingCarForm;
