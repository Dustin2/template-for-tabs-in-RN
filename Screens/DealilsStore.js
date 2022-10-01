import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  ToastAndroid,
} from "react-native";
import { TextInput } from "react-native-paper";

import { Colors } from "../assets/Colors";

const DealilsStore = () => {
  const [store, setStore] = useState({
    nameStore: "",
    locationNumberStore: 0,
  });
  const [dimensionstore, setDimensionStore] = useState({
    numberOfLocation: "",
    heightStore: "",
    widthStore: "",
  });
  const [count, SetCount] = useState(0);

  ///change value
  const handleChangeText = (name, value) => {
    setStore({ ...store, [name]: value });
    //recibira un nombre y un valor estableciendo el nombre y valor recibido y actualizando
  };
  //saveStore
  const saveStore = () => {
    if (
      store.nameStore === "" ||
      store.locationNumberStore === "" ||
      store.heightStore === "" ||
      store.widthStore === ""
    // count <numberOfLocation
    ) {
      Alert.alert(
        "Error ",
        "ubicaciones pendientes"
      );
    } else {
      Alert.alert("Confirmar", "Desea guardar los cambios actuales?", [
        {
          text: "Cancelar",
          onPress: () => ToastAndroid.show("cancel!", ToastAndroid.SHORT),
          style: "cancel",
        },
        {
          text: "Guardar",
          onPress: () => (
            //   sendData(),
            console.log(store),
            ToastAndroid.show(
              "Tienda registrada con exito!",
              ToastAndroid.SHORT
            )
          ),
          style: "success",
        },
      ]);
    }
  }; //end saveNewUser

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          value={store.nameStore}
          mode="outlined"
          label="Nombre de tienda"
          onChangeText={(value) => {
            handleChangeText("nameStore", value);
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          value={dimensionstore.locationNumberStore}
          mode="outlined"
          label="Numero de Ubicaciones"
          keyboardType="numeric"
          onChangeText={(value) => {
            handleChangeText("locationNumberStore", value);
          }}
        />
      </View>

      <View>
        <Button
          styles={{ marginBottom: 10 }}
          color={Colors.info}
          title={"Agregar"}
          onPress={() => {
            saveStore();
         
           
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          value={count}
          mode="outlined"
          editable={false}
          placeholder={"Ubicacion numero:" + count}
          onChangeText={(value) => {
            handleChangeText("count", value);
          }}
        />
    </View>
      <View>
        <TextInput
          style={styles.textInput}
          value={store.heightStore}
          mode="outlined"
          keyboardType="numeric"
          label="Altura de la ubicacion"
          onChangeText={(value) => {
            handleChangeText("heightStore", value);
          }}
        />
      </View>

      <View>
        <TextInput
          style={styles.textInput}
          value={store.widthStore}
          mode="outlined"
          keyboardType="numeric"
          label="Ancho de la ubicacion"
          onChangeText={(value) => {
            handleChangeText("widthStore", value);
          }}
        />
      </View>
      <View>
        <Button
          styles={styles.button}
          color={Colors.success}
          title={"Guardar"}
          onPress={() => {
            saveStore();
            SetCount(count + 1);
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    //  backgroundColor: '#d3d3d3',
  },
  inputGroup: {
    flex: 1,
    padding: 1,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    fontSize: 17,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  containerta: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textareaContainer: {
    height: 180,
    padding: 3,
    backgroundColor: "#F5FCFF",
    lineHeight: 35,
  },
  textarea: {
    textAlignVertical: "top",
    height: 170,
    fontSize: 17,
    color: "#333",
    lineHeight: 35,
  },
  button: {
    marginBottom: 10,
    marginTop: 10,
  },
  textInput: {
    marginBottom: 10,
  },
});

export default DealilsStore;
