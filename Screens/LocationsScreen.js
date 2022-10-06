import react, { useState, useRef } from "react";
import { View, StyleSheet, ScrollView, Button, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const initialState = {};

const LocationsScreen = () => {
  const [store, setStore] = useState();
  const [user, setUser] = useState(initialState);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.textInput}>Ubicacion : Chapala</Text>
        <Picker
          ref={pickerRef}
          selectedValue={store}
          onValueChange={(itemValue, itemIndex) => setStore(itemValue)}
        >
          <Picker.Item label="Selecciona la tienda" value="" enabled={false} />
          <Picker.Item label="Chapala" value="Chapala" />
          <Picker.Item label="Circunvalacion" value="Circunvalacion" />
          <Picker.Item label="Juarez" value="Juarez" />
          <Picker.Item label="Santa Fe" value="Santa Fe" />
          <Picker.Item label="Isla" value="Isla" />
        </Picker>
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.textInput}>Tipo de Ubicacion</Text>
        <Picker
          ref={pickerRef}
          selectedValue={store}
          onValueChange={(itemValue, itemIndex) => setStore(itemValue)}
        >
          <Picker.Item
            label="Selecciona el tipo de ubicacion"
            value=""
            enabled={false}
          />
          <Picker.Item label="bachoco" value="bachoco" />
          <Picker.Item label="piramide" value="piramide" />
          <Picker.Item label="pared" value="pared" />
          <Picker.Item label="Frente" value="pared" />
        </Picker>
      </View>
      <View style={styles.inputGroup}>
        <TextInput label={"Total de espacios :4"} editable={false} mode={"outlined"} />
      </View>
      <View>
        <Text style={styles.textInput}>Tipo de Ubicacion</Text>
        <Picker
          ref={pickerRef}
          selectedValue={store}
          onValueChange={(itemValue, itemIndex) => setStore(itemValue)}
        >
          <Picker.Item label="Tipo de espacios" value="" enabled={false} />
          <Picker.Item label="bachoco" value="bachoco" />
          <Picker.Item label="piramide" value="piramide" />
          <Picker.Item label="pared" value="pared" />
          <Picker.Item label="Frente" value="pared" />
        </Picker>
      </View>
      <View style={styles.inputGroup}>
        <TextInput label={"Total de espacios : 4"} editable={false}  mode={"outlined"}/>
      </View>
      <View style={styles.inputGroup}>
        <Button title="Agregar " style={styles.button} />
      </View>
      <View style={styles.inputGroup}>
        <Button title="Guardar " color={"green"} style={styles.button} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    textAlign: 'center',

    //  backgroundColor: '#d3d3d3',
  },
  inputGroup: {
    flex: 1,
    padding: 1,
    marginBottom: 10,
    fontSize: 17,
    marginBottom: 10,
    marginEnd: 10,
  },
  button: {
    marginBottom: 10,
  },
  textInput: { fontSize: 16 },
});

export default LocationsScreen;
