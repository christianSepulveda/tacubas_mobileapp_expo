import { View, Text, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import COLORS from "../../../Styles/colors.json";
import { MenuItemSchema } from "../Home";
import Header from "../../../Components/Header";
import SearchBar from "../../../Components/SearchBar";
import MenuItem from "../../../Components/MenuItem";

export type PlaylistStackParamList = {
  Playlist: undefined;
  Songs: {
    playlist: MenuItemSchema;
  };
};

type SongsScreenRouteProp = RouteProp<PlaylistStackParamList, "Songs">;
type SongsScreenNavigationProp = StackNavigationProp<
  PlaylistStackParamList,
  "Songs"
>;

type Props = {
  route: SongsScreenRouteProp;
  navigation: SongsScreenNavigationProp;
};

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

const Songs: FC<Props> = ({ route, navigation }) => {
  const [menuItems, setMenuItems] = useState<MenuItemSchema[]>([]);
  const handleMenuItems = () => {
    setMenuItems(items);
  };

  useEffect(() => {
    handleMenuItems();
  }, []);

  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1, padding: 20 }}>
      <Header title={`${route.params.playlist.title}`} subTitle="Karaokes" />
      <SearchBar placeholder={"Buscar una Canción..."} />
      <ScrollView>
        {menuItems.map((item, index) => (
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

export default Songs;
