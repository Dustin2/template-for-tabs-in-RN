import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, ScrollView,Alert,ToastAndroid} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { TextInput } from "react-native-paper";

export default function Home() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
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
    console.log("Type: " + type + "\nData: " + data);
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
          ,products.forEach(product =>console.log(product))
        ),
        style: "success",
      },
    ]);
  };

    ///sendData to firebase
    const sendData = async () => {
        await addDoc(collection(database, 'actas'), {
          name: user.name,
          colony: user.colony,
          date: user.date,
          typeVehicle: user.typeVehicle,
          plaque: user.plaque,
          color: user.color,
          description: user.description,
          // createdDoc: servnewerTimestamp(),
          createdDoc: new Date(),
        });
        setUsers(initialState);
    
        ///use this change screen after save data
        // props.navigation.navigate('Actas Recientes');
    
        ///serverTimestamp is used for save date to create document with firebase
      };
      /// sendData


  // Return the View
  return (
    <ScrollView>
      
      <View>
        <TextInput label="Correo " />
      </View>
      <View>
        <TextInput label="Contraseña" />
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
});