import { View, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import COLORS from "../../../Styles/colors.json";
import MenuItem from "../../../Components/MenuItem";
import Header from "../../../Components/Header";
import { type MenuItemSchema } from "../Home";
import SearchBar from "../../../Components/SearchBar";
import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { PlaylistStackParamList } from "../Songs";

type Props = {};

type PlaylistStackNavigationProp = StackNavigationProp<PlaylistStackParamList>;

const items: MenuItemSchema[] = [
  {
    id: 0,
    title: "Pop Latino",
    desc: "Variados artistas y canciones de Pop Latino.",
  },
  {
    id: 1,
    title: "Reggaeton",
    desc: "Muchas canciones de reggaeton, desde lo más nuevo a los clásicos.",
  },
  {
    id: 2,
    title: "Rock Latino",
    desc: "Los clásicos del rock latino los encuentras acá.",
  },
  {
    id: 3,
    title: "80s & 90s",
    desc: "Las mejores canciones desde la época dorada de la música.",
  },
];

const Playlists = (props: Props) => {
  const [menuItems, setMenuItems] = useState<MenuItemSchema[]>([]);
  const navigation = useNavigation<PlaylistStackNavigationProp>();

  const handleMenuItems = () => {
    setMenuItems(items);
  };

  useEffect(() => {
    handleMenuItems();
  }, []);

  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1, padding: 20 }}>
      <Header title="Playlists" subTitle="Karaokes" />
      <SearchBar placeholder={"Buscar una Playlist..."} />
      <ScrollView>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            desc={item.desc}
            showBottomInfo={item.showBottomInfo}
            bottomInfo={item.bottomInfo}
            onPress={() => {
              item.id != undefined
                ? navigation.navigate("Songs", { playlist: item })
                : null;
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Playlists;
