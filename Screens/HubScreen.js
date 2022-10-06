import react, { useState, useRef } from "react";
import { View, StyleSheet, ScrollView,Button,Text } from "react-native";
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
     <Text style={styles.textInput}>Bienvenido Chapala</Text>
      </View>
      <View   style={styles.inputGroup}>
        <Button title="Ubicaciones" styles={{ marginBottom: 10}} />
      </View>
      <View  style={styles.inputGroup}>
        <Button title="Captura" styles={{  marginBottom: 10}}  />
      </View>
      <View  style={styles.inputGroup} >
        <Button title="Cambios" styles={styles.button} />
      </View>
      <View  style={styles.inputGroup} >
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
    }, 
    textInput: {
        flex: 1,
        fontSize: 50,
       textAlign: 'center',
    },
});

export default HubScreen;