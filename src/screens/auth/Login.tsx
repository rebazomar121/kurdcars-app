import React, { useState, useEffect } from "react";
import ScrollRefresh from "@components/reusable/ScrollRefetch";
import Text from "@src/components/reusable/Text";
import Container from "@src/components/reusable/Container";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import PhoneNumberInput from "@src/components/reusable/PhoneNumberInput";
import OtpInput from "@src/components/reusable/OtpInput";

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
        {/* navbar */}
        <View className="z-20 top-2 left-2 flex  flex-row ">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="p-2 rounded-b-md bg-white rounded-full"
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="flex text-2xl  self-center mx-2" fontFamily="bold">
            Login
          </Text>
        </View>
        <View className="p-4">
          <View className="w-full bg-primary mt-4 rounded-md p-2">
            <Text fontFamily={"bold"} className="text-white text-2xl">
              Login And Sell Your Car Now
            </Text>
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
