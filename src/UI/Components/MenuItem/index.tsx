import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import COLORS from "../../Styles/colors.json";

type Props = {
  title: string;
  desc: string;
  showBottomInfo?: boolean;
  bottomInfo?: string;
  onPress?: () => void;
};

const MenuItem: FC<Props> = ({
  title,
  desc,
  showBottomInfo,
  bottomInfo,
  onPress = () => {},
}) => (
  <TouchableOpacity
    style={{
      marginTop: 30,
      backgroundColor: COLORS.dark,
      width: "100%",
      borderRadius: 5,
    }}
    onPress={onPress}
  >
    <View style={{ margin: 20 }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "600",
          color: COLORS.white,
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "400", color: COLORS.white }}>
        {desc}
      </Text>
    </View>

    {showBottomInfo ? (
      <View
        style={{
          backgroundColor: COLORS.orange,
          borderBottomEndRadius: 5,
          borderBottomStartRadius: 5,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "700", color: COLORS.white }}>
          {bottomInfo}
        </Text>
      </View>
    ) : null}
  </TouchableOpacity>
);

export default MenuItem;
