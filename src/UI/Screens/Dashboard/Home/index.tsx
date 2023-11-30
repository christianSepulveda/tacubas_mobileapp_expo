import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../../Styles/colors.json";
import MenuItem from "../../../Components/MenuItem";
import Header from "../../../Components/Header";

type Props = {};

export type MenuItemSchema = {
  id?: number;
  title: string;
  desc: string;
  showBottomInfo?: boolean;
  bottomInfo?: string;
};

const items: MenuItemSchema[] = [
  {
    title: "Nuestra Carta",
    desc: "Revisa nuestras comidas y bebidas disponibles.",
    showBottomInfo: true,
    bottomInfo: "Ver más en la web...",
  },
  {
    title: "Karaokes",
    desc: "Solicita uno de nuestros Karaokes disponibles.",
    showBottomInfo: false,
  },
  {
    title: "Solicitud Personalizada",
    desc: "Realiza una solicitud de alguna canción que no encontraste en Karaokes.",
    showBottomInfo: false,
  },
];

const Home: FC<Props> = () => {
  const [menuItems, setMenuItems] = useState<MenuItemSchema[]>([]);

  const handleMenuItems = () => {
    setMenuItems(items);
  };

  useEffect(() => {
    handleMenuItems();
  }, []);

  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1, padding: 20 }}>
      <Header title="Bienvenido" subTitle="Inicio" />

      <ScrollView>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            title={item.title}
            desc={item.desc}
            showBottomInfo={item.showBottomInfo}
            bottomInfo={item.bottomInfo}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
