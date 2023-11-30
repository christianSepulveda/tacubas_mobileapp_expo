import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "../../Styles/colors.json";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home, { MenuItemSchema } from "./Home";
import Playlists from "./Playlists";
import Requests from "./Requests";
import Options from "./Options";
import { createStackNavigator } from "@react-navigation/stack";
import Songs from "./Songs";
import RequestedSongs from "./RequestedSongs";

type Props = {};

type StackParamList = {
  Playlist: undefined;
  Songs: {
    playlist: MenuItemSchema;
  };
};

export type RequestedSongsParams = {
  RequestedSongs: undefined;
  Options: undefined;
};

const Tab = createBottomTabNavigator();
const PlaylistStack = createStackNavigator<StackParamList>();
const OptionStack = createStackNavigator<RequestedSongsParams>();

const PlaylistNav = (): JSX.Element => (
  <PlaylistStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Playlist"
  >
    <PlaylistStack.Screen name={"Playlist"} component={Playlists} />
    <PlaylistStack.Screen name={"Songs"} component={Songs} />
  </PlaylistStack.Navigator>
);

const OptionNav = (): JSX.Element => (
  <OptionStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Options"
  >
    <OptionStack.Screen name={"Options"} component={Options} />
    <OptionStack.Screen name={"RequestedSongs"} component={RequestedSongs} />
  </OptionStack.Navigator>
);

const Dashboard: FC<Props> = ({}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: "#eee",
        tabBarStyle: { backgroundColor: "#000", borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Playlists"
        component={PlaylistNav}
        options={{
          headerShown: false,
          tabBarLabel: "Playlists",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="play-skip-forward-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{
          headerShown: false,
          tabBarLabel: "Solicitar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="OptionsMenu"
        component={OptionNav}
        options={{
          headerShown: false,
          tabBarLabel: "Opciones",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
