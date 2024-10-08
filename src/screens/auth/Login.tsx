import React, { useState, useEffect } from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import Container from "@src/components/reusable/Container";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import PhoneNumberInput from "@src/components/reusable/PhoneNumberInput";
import OtpInput from "@src/components/reusable/OtpInput";
import PrimaryCartWithText from "@src/components/layout/PrimaryCartWithText";
import BackNavbar from "@src/components/layout/BackNavbar";
import Input from "@src/components/reusable/Input";
import { SelectList } from "react-native-dropdown-select-list";
import { cites } from "@helpers/fakeData";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [inputData, setInputData] = useState<any>({
    phoneNumber: "",
    code: "",
  });
  const [isPinReady, setIsPinReady] = useState(false);
  const [canReSendOTP, setCanReSendOTP] = useState<boolean>(false);
  const [remainingTime, setRemainingTime] = useState(120); // 2 minutes in seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  const maximumCodeLength = 6;
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (seconds === 0 && minutes === 0) {
      setCanReSendOTP(true);
    }
  }, [minutes, seconds]);

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (step === 2) {
      countdownInterval = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(countdownInterval);
        }
      }, 1000);
    }

    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [step, remainingTime]);

  return (
    <Container classNameContainer="none">
      <ScrollRefresh marginBottom={0} height="100%">
        <BackNavbar title="Login" />
        <PrimaryCartWithText title="Login And Sell Your Car Now" />

        <Text className="text-center text-lg m-4">
          If You Don't Have Account Just Enter Your Name And Verify At Then Your
          Account Will Be Created
        </Text>

        <View className="flex flex-col px-4 justify-center ">
          <Input
            onChange={(e: any) => {
              setInputData({ ...inputData, price: e });
            }}
            placeholder="Name"
            label="Name"
            type="default"
          />
          <View>
            <Text className="text-xl">Cites</Text>
            <SelectList
              boxStyles={{
                width: "100%",
                backgroundColor: "white",
                borderRadius: 6,
                borderColor: "#A0A0A0",
              }}
              dropdownStyles={{
                width: "100%",
                borderRadius: 6,
                borderColor: "#A0A0A0",
                backgroundColor: "white",
              }}
              dropdownTextStyles={{
                textAlign: "left",
                backgroundColor: "white",
              }}
              placeholder={"Cites"}
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
        </View>

        {step === 1 && (
          <>
            <PhoneNumberInput
              onChangePhoneNumber={(phoneNumber) => setInputData(phoneNumber)}
            />
            <View className="p-4">
              <TouchableOpacity
                onPress={() => {
                  //   navigation.navigate("OTP", { phoneNumber: inputData });
                  setStep(2);
                }}
                className="bg-primary p-2 rounded-md"
              >
                <Text
                  fontFamily={"bold"}
                  className="text-white text-center text-2xl"
                >
                  Send OTP
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {step === 2 && (
          <>
            <Text className="text-center text-2xl mt-4" fontFamily={"bold"}>
              Enter the code sent to {inputData?.phoneNumber}
            </Text>
            <OtpInput
              code={inputData?.code}
              onChange={(code) => {
                setInputData({
                  ...inputData,
                  code,
                });
              }}
              maximumLength={maximumCodeLength}
              setIsPinReady={setIsPinReady}
              isPinReady={isPinReady}
            />
            <View
              className="flex-row justify-center items-center w-full mt-4"
              pointerEvents={`${!canReSendOTP ? "none" : "auto"}`}
            >
              <Text className="text-xl">Did'nt receive the code? </Text>
              {/* timer countdown */}
              <Text className="mx-3 text-xl">{`${minutes}:${
                seconds < 10 ? "0" : ""
              }${seconds}`}</Text>
              <TouchableOpacity
                onPress={() => {}}
                style={{}}
                className={`border-b  ${
                  canReSendOTP ? "opacity-100" : "opacity-50"
                } mx-1`}
              >
                <Text className="text-xl">Resend</Text>
              </TouchableOpacity>
            </View>
            <View className="p-4">
              <TouchableOpacity
                onPress={() => {
                  setStep(2);
                }}
                className="bg-primary p-2 rounded-md"
              >
                <Text
                  fontFamily={"bold"}
                  className="text-white text-center text-2xl"
                >
                  Verify OTP
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollRefresh>
    </Container>
  );
};

export default Login;
