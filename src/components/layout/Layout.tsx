import React from "react";
import { View, SafeAreaView } from "react-native";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "@components/reusable/Divider";

type Type = React.FC<{
  children: React.ReactNode;
}>;

const Layout: Type = ({ children }) => {
  return (
    <View className="bg-white h-full">
      <SafeAreaView className="">
        <Navbar />
        <View>{children}</View>
        <Footer />
      </SafeAreaView>
    </View>
  );
};

export default Layout;
