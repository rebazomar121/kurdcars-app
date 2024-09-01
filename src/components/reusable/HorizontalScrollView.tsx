import React, { ReactNode } from "react";
import { ScrollView, ViewStyle } from "react-native";

interface HorizontalScrollViewProps
  extends React.ComponentProps<typeof ScrollView> {
  children: ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

const HorizontalScrollView: React.FC<HorizontalScrollViewProps> = ({
  children,
  style,
  contentContainerStyle,
  ...props
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={style}
      contentContainerStyle={[
        { flexDirection: "row", padding: 16, gap: 16 },
        contentContainerStyle,
      ]}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

export default HorizontalScrollView;
