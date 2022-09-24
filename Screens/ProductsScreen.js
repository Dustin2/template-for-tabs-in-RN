import react, { useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";

const initialState = {};
const ProductsScreen = () => {
  const [products, setProducts] = useState(initialState);
  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput placeholder="clave SAT" editable={false} />
        <TextInput placeholder="" style={styles.inputGroup} />
      </View>
      <View>
        <TextInput placeholder="Cantidad" editable={false} />
        <TextInput style={styles.inputGroup} />
      </View>
      <View>
        <TextInput placeholder="Nombre" editable={false} />
        <TextInput style={styles.inputGroup} />
      </View>
      <View>
        <TextInput placeholder="Precio" editable={false} />
        <TextInput style={styles.inputGroup} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 1,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    fontSize: 17,
  },
});

export default ProductsScreen;
