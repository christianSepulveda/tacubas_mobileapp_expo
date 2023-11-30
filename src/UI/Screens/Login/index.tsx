import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../Styles/colors.json";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationProp } from "@react-navigation/native";

import UserLogin from "./UserForm";
import WorkerForm from "./WorkerForm";

interface Props {
  navigation: NavigationProp<any>;
}

const Login: FC<Props> = ({ navigation }) => {
  const [showUserForm, setShowUserForm] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (worker: boolean) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Dashboard");
    }, 3000);
  };

  return (
    <LinearGradient
      colors={["#2a2a2a", "#000000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, padding: 40 }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableOpacity
          onPress={() => setShowUserForm(!showUserForm)}
          style={{ position: "absolute", top: 20, end: -15, zIndex: 100 }}
        >
          <Ionicons name="person" size={30} color={COLORS.white} />
        </TouchableOpacity>

        {showUserForm ? (
          <UserLogin onPress={() => handleLogin(false)} loading={loading} />
        ) : (
          <WorkerForm onPress={() => handleLogin(false)} loading={loading} />
        )}
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;
