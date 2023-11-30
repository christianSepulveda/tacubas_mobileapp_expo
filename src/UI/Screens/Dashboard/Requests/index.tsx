import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import React, { FC, useState } from "react";
import Header from "../../../Components/Header";
import COLORS from "../../../Styles/colors.json";
import * as Animatable from "react-native-animatable";
import MenuItem from "../../../Components/MenuItem";

type Props = {};

const Requests: FC<Props> = ({}) => {
  const [showSongRequest, setShowSongRequest] = useState(false);
  const [showFeedbackRequest, setShowFeedbackRequest] = useState(false);

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  };

  return (
    <View style={{ backgroundColor: COLORS.black, flex: 1, padding: 20 }}>
      <Header title="Solicitud" subTitle="Karaokes" />

      <ScrollView>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <MenuItem
            title={"Solicitar un Karaoke"}
            desc={
              "Solicita un karaoke personalizado que no se encuentre en alguna lista."
            }
            showBottomInfo={false}
            onPress={() => {
              setShowSongRequest(!showSongRequest);
              setShowFeedbackRequest(false);
            }}
          />

          {showSongRequest ? (
            <Animatable.View animation={fadeIn}>
              <View
                style={{
                  backgroundColor: COLORS.dark,
                  marginTop: 10,
                  borderRadius: 5,
                  padding: 15,
                }}
              >
                <TextInput
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    color: COLORS.white,
                  }}
                  placeholder="Ingresa un karaoke..."
                  placeholderTextColor={COLORS.orange}
                  returnKeyType="done"
                />
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.orange,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  padding: 10,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: COLORS.white,
                  }}
                >
                  Enviar
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          ) : null}

          <MenuItem
            title={"Entregar una Observación"}
            desc={
              "Si hubo algo que no te agradó, entrega una propuesta de mejora a nuestro equipo."
            }
            showBottomInfo={false}
            onPress={() => {
              setShowFeedbackRequest(!showFeedbackRequest);
              setShowSongRequest(false);
            }}
          />

          {showFeedbackRequest ? (
            <Animatable.View animation={fadeIn}>
              <View
                style={{
                  backgroundColor: COLORS.dark,
                  marginTop: 10,
                  borderRadius: 5,
                  padding: 15,
                }}
              >
                <TextInput
                  style={{
                    fontSize: 18,
                    fontWeight: "500",
                    color: COLORS.white,
                  }}
                  placeholder="Ingresa una obervación..."
                  placeholderTextColor={COLORS.orange}
                  returnKeyType="done"
                />
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.orange,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  padding: 10,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: COLORS.white,
                  }}
                >
                  Enviar
                </Text>
              </TouchableOpacity>
            </Animatable.View>
          ) : null}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Requests;
