import React from "react";
import { View, SafeAreaView } from "react-native";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Divider from "@components/reusable/Divider";

type Type = React.FC<{
  children: React.ReactNode;
  showHeader?: boolean;
}>;

const Layout: Type = ({ children, showHeader = true }) => {
  return (
    <View className="bg-white h-full">
      <SafeAreaView className="">
        {showHeader ? <Navbar /> : <></>}
        <View>{children}</View>
        <Footer />
      </SafeAreaView>
    </View>
  );
};

export default Layout;
