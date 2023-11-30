import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header";
import COLORS from "../../../Styles/colors.json";
import { MenuItemSchema } from "../Home";
import MenuItem from "../../../Components/MenuItem";

type Props = {};

const items: MenuItemSchema[] = [
  {
    id: 0,
    title: "Despacito",
    desc: "Daddy Yankee feat. Luis Fonsi",
  },
  {
    id: 1,
    title: "Mia",
    desc: "Drake feat. Bad Bunny",
  },
  {
    id: 2,
    title: "Classy 101",
    desc: "Feid feat. Young Miko",
  },
];

const RequestedSongs = (props: Props) => {
  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <Header
        title="Solicitudes"
        subTitle="Karaokes"
        containerStyle={{ marginLeft: 20, marginTop: 20 }}
      />

      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            desc={item.desc}
            showBottomInfo={item.showBottomInfo}
            bottomInfo={item.bottomInfo}
            onPress={() => {}}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default RequestedSongs;
