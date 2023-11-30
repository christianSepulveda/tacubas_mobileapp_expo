import { View, TextInput } from "react-native";
import React, { FC, useEffect, useState } from "react";
import COLORS from "../../Styles/colors.json";
import Ionicons from "react-native-vector-icons/Ionicons";

type Props = { placeholder: string };

const SearchBar: FC<Props> = ({ placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.dark,
        width: "100%",
        padding: 15,
        borderRadius: 5,
        marginTop: 30,
        flexDirection: "row",
      }}
    >
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.orange}
        style={{
          fontSize: 16,
          color: COLORS.orange,
          fontWeight: "500",
          flex: 11,
        }}
        returnKeyType="search"
      />
      <Ionicons
        name="search"
        color={COLORS.white}
        size={20}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default SearchBar;
