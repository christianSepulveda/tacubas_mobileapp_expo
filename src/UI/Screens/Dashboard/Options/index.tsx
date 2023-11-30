import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header";
import COLORS from "../../../Styles/colors.json";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RequestedSongsParams } from "..";

type Props = {};

export type OptionStackNavigationProp =
  StackNavigationProp<RequestedSongsParams>;

type Option = {
  id: number;
  label: string;
  action: () => void;
  icon: string;
};

const Options = (props: Props) => {
  const [isWorker, setIsWorker] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);

  const navigation = useNavigation<OptionStackNavigationProp>();

  const privateOptions: Option[] = [
    {
      id: 1,
      label: "Ver Solicitudes",
      action: () => navigation.navigate("RequestedSongs"),
      icon: "chatbubble-ellipses",
    },
  ];

  const publicOptions: Option[] = [
    { id: 0, label: "Cerrar Sesión", action: () => {}, icon: "log-out" },
  ];

  const handleCheckWorker = async () => {
    setIsWorker(true);
    handleOptions();
  };

  const handleOptions = () => {
    isWorker
      ? setOptions([...privateOptions, ...publicOptions])
      : setOptions([...publicOptions]);
  };

  useEffect(() => {
    handleCheckWorker();
  }, [isWorker]);

  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1 }}>
      <Header
        title="Opciones"
        subTitle="Configuración"
        containerStyle={{ marginLeft: 20, marginTop: 20 }}
      />
      <ScrollView>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              padding: 20,
              borderTopColor: COLORS.dark,
              borderBottomColor: COLORS.dark,
              borderBottomWidth: 1,
              borderTopWidth: 1,
              width: "100%",
              marginTop: index == 0 ? 30 : 0,
              flexDirection: "row",
              alignItems: "center",
            }}
            onPress={item.action}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: COLORS.white,
                flex: 11,
              }}
            >
              {item.label}
            </Text>

            <Ionicons
              name={item.icon}
              style={{ flex: 1 }}
              size={25}
              color={COLORS.white}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Options;
