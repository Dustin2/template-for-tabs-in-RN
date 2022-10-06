import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Colors } from "../colors";
const LoginScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Hola</Text>
        <Text style={styles.subTitle}>Inicia sesión en tu cuenta</Text>
      </View>
      <View>
        <TextInput
          style={styles.TextInput}
          label={"Correo"}
          mode={"outlined"}
          activeOutlineColor={Colors.accent}
          
        />
      </View>
      <View>
        <TextInput
          style={styles.TextInput}
          label={"Contraseña"}
          mode={"outlined"}
          activeOutlineColor={Colors.accent}
        />
      </View>
      <View>
        <Text style={styles.text}>¿Olvidaste tu Contraseña?</Text>
      </View>
      <View>
        <Button
          icon="login"
          mode="contained"
          buttonColor={Colors.primary}
          dark={true}
          onPress={() => console.log("Pressed")}
        >
          Iniciar
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    // justifyContent: "center",
    backgroundColor: "#f1f1f1",
  },

  title: {
    fontSize: 30,
    color: "#181818",
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
  },

  TextInput: {
    marginBottom: 15,
    marginTop: 22,
  },
  text: { fontSize: 15, color: "gray"},
});

export default LoginScreen;
