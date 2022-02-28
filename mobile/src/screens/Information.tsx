import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Information: React.FC<any> = ({ navigation }) => {
  const style: any = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    tittle: {
      fontFamily: "poppinsExtraBold",
      fontSize: 20,
    },
    text: {
      fontFamily: "poppins",
      fontSize: 15,
    },
    back: {
      position: "absolute",
      top: "7%",
      left: "7%",
    },
  });

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.back}
        onPress={(): void => {
          navigation.navigate("login");
        }}
      >
        <AntDesign name="back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={style.tittle}>App information:</Text>
      <Text style={style.text}>Version: Chill&chat alpha program v0.0.0</Text>
      <Text style={style.text}>Verified offical Chill&chat build.</Text>
      <View style={{ padding: 10 }} />
      <Text style={style.tittle}>Credits:</Text>
      <Text style={style.text}>Alvin cheng - Software engineer</Text>
      <Text style={style.text}>Brianna cheng - UI&UX designer</Text>
    </View>
  );
};

export default Information;
