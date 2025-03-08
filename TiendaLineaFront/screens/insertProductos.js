import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { Input, Button } from "@rneui/base"
import { useState } from "react"
//import { saveProdcutoRest} from "../rest_client"


export const InsertProductos = () => {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');

  const showMessage = (message) => {
    Alert.alert("CONFIRMACIÓN", message);
    navigation.goBack();
  }

  const createProducto = () => {
          saveProdcutoRest(
              {
                  nombre: nombre,
                  categoria: categoria,
                  precio: precio,
                  stock: stock
              },
              showMessage
          );
      }

  return (
    <View>
      <Input
            value={nombre}
            placeholder="NOMBRE:"
            onChangeText={(value) => {
              setNombre(value);
            }}
        />
        <Input
            value={categoria}
            placeholder="CATEGORIA:"
            onChangeText={(value) => {
              setCategoria(value);
            }}
        />
        <Input
            value={precio}
            placeholder="PRECIO:"
            onChangeText={(value) => {
              setPrecio(value);
            }}
        />
        <Input
            value={stock}
            placeholder="STOCK:"
            onChangeText={(value) => {
              setStock(value);
            }}
        />
        <Button 
            title="GUARDAR" 
            onPress={createPro} />
       

    </View>
  );
};
