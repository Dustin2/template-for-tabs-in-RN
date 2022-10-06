import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
  ToastAndroid,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TextInput } from "react-native-paper";

export default function CaptureScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState([]);
  const [position, setPosition] = useState([]);
  const [products, setProducts] = useState([]);

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    setProducts(data);
    console.log("Type: " + type + "\nData: " + data);
    console.log("dsads"+products)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  ///change value
  const handleChangeText = (text, value) => {
    setProducts({ ...products, [text]: value });
    //recibira un nombre y un valor estableciendo el nombre y valor recibido y actualizando
  };
  //save products
  const saveProducts = () => {
    Alert.alert("Confirmar", "Desea guardar los cambios actuales?", [
      {
        text: "Cancelar",
        onPress: () => ToastAndroid.show("cancel!", ToastAndroid.SHORT),
        style: "cancel",
      },
      {
        text: "Guardar",
        onPress: () => (
          //sendData(),

          ToastAndroid.show("Acta registrada con exito!", ToastAndroid.SHORT)
        
        ),
        style: "success",
      },
    ]);
  };



  // Return the View
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }}
          />
        </View>
{/* 
        <Button
          title={"scan again"}
          onPress={() => setScanned(false)}
          color="red"
        /> */}
       
      </View>
      <View>
        <TextInput
          value={products.text}
          editable={false}
          label={"Nombre del Articulo"+text}
          onChangeText={(value) => {
            handleChangeText("text", value);
          }}
          multiline={true}
        />
        <TextInput
          value={products.text}
          editable={false}
          label={"Codigo del Articulo"+text}
          onChangeText={(value) => {
            handleChangeText("text", value);
          }}
          multiline={true}
          
        />
         <Button
          title="Guardar"
          onPress={() => {
            saveProducts();
          }}
          color="green"
        />
      </View>
      <View>
        <Text style={styles.textInput}>Datos de la Ubicacion</Text>
        <TextInput label={"Nombre : Chapala"}  editable={false}/>
        <TextInput label={"Tipo de Ubicacion : Pared"}  editable={false}/>
        <TextInput label={"Espacios Disponibles : 4"}  editable={false}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    marginBottom: 20,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  textInput: {
    flex: 1,
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
