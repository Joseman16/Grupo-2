import { View, StyleSheet, FlatList, TouchableHighlight } from "react-native";
import { ListItem, FAB } from "@rneui/base";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getAllProductos } from "../rest_client/tienda";

export const ProductoList = ({ navigation }) => {
  const [productoList, setProductoList] = useState([]);

  // Función para actualizar la lista
  const fnRefreshList = (productos) => {
    setProductoList(productos);
  };

  // Cargar productos cuando la pantalla gana foco
  useFocusEffect(
    useCallback(() => {
      getAllProductos(fnRefreshList);
    }, [])
  );

  // Renderizado de cada producto
  const ProductoItem = ({ producto }) => {
    return (
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("ProductoFormNav", { productoParam: producto });
        }}
      >
        <ListItem>
          <ListItem.Content>
            <ListItem.Title>{producto.pro_nombre}</ListItem.Title>
            <ListItem.Subtitle>Stock: {producto.pro_stock}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={productoList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ProductoItem producto={item} />}
      />
      <FAB
        title="+"
        onPress={() => {
          navigation.navigate("ProductoFormNav", {});
        }}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
