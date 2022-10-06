import react, { useState, useRef } from "react";
import { View, StyleSheet, ScrollView,Button } from "react-native";
import { TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

const initialState = {};

const HubScreen = () => {
  const [store, setStore] = useState();
  const [user,setUser]= useState(initialState);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView style={styles.container}>
      <View>
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
      <View >
        <Button title="Ubicaciones" styles={{ marginBottom: 10}} />
      </View>
      <View>
        <Button title="Captura" styles={styles.button} />
      </View>
      <View >
        <Button title="Cambios" styles={styles.button} />
      </View>
      <View >
        <Button title="Configuracion" styles={styles.button} />
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
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        fontSize: 17,
        marginBottom: 10,
        marginEnd: 10,
      },
    button: {
        marginBottom: 10,
    }
});

export default HubScreen;