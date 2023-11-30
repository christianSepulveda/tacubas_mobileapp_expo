import { View, Text } from "react-native";
import React, { FC } from "react";
import COLORS from "../../Styles/colors.json";

type Props = {
  title: string;
  subTitle: string;
  containerStyle?: object;
};

const Header: FC<Props> = ({ title, subTitle, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Text style={{ marginTop: 45, fontSize: 14, color: COLORS.orange }}>
        {subTitle}
      </Text>
      <Text style={{ fontSize: 38, color: COLORS.white, fontWeight: "700" }}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
