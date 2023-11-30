import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useState } from "react";
import COLORS from "../../../Styles/colors.json";

interface LoginProps {
  onPress?: () => void;
  loading: boolean;
}

const WorkerLogin: FC<LoginProps> = ({ onPress = () => {}, loading }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          marginBottom: 20,
          color: COLORS.white,
        }}
      >
        Iniciar Sesión
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          marginBottom: 10,
          color: COLORS.white,
        }}
      >{`Nombre de Usuario`}</Text>
      <TextInput
        style={{
          width: "100%",
          paddingVertical: 14,
          paddingHorizontal: 10,
          borderRadius: 5,
          backgroundColor: "#eee",
          fontSize: 18,
          marginBottom: 30,
        }}
        placeholder="Usuario"
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: "500",
          marginBottom: 10,
          color: COLORS.white,
        }}
      >{`Contraseña`}</Text>
      <TextInput
        style={{
          width: "100%",
          paddingVertical: 14,
          paddingHorizontal: 10,
          borderRadius: 5,
          backgroundColor: "#eee",
          fontSize: 18,
          marginBottom: 30,
        }}
        placeholder="*******"
        secureTextEntry
      />

      <TouchableOpacity
        style={{
          backgroundColor: loading ? COLORS.white : COLORS.orange,
          width: "100%",
          borderRadius: 10,
          padding: 18,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={onPress}
      >
        {!loading ? (
          <Text
            style={{ fontSize: 20, fontWeight: "600", color: COLORS.white }}
          >
            Ingresar
          </Text>
        ) : (
          <ActivityIndicator color={COLORS.orange} size={20} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default WorkerLogin;
