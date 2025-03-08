import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect, useCallback } from "react";
import { getAllVenta } from "../rest_client/tienda";
import { Button, ListItem, FAB } from "@rneui/base";
import { useFocusEffect } from "@react-navigation/native";
export const ListVentas = () => {
  const [ventasList, setVentasList] = useState();
  const fnRefreshList = (list) => {
    setVentasList(list);
  };
  useFocusEffect(
    useCallback(() => {
      getAllVenta(fnRefreshList);
    }, [])
  );
  const VentaItem = ({ venta }) => {
    return (
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{venta.pro_id}</ListItem.Title>
          <ListItem.Subtitle>{venta.pro_nombre}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <View>
      <Button
        onPress={() => {
          getAllVenta(fnRefreshList);
          console.log(ventasList);
        }}
        title={"Actualizar"}
      />
      <View style={styles.container}>
        <Text>LISTA DE CONTACTOS</Text>

        <FlatList
          data={ventasList}
          renderItem={({ item }) => {
            return <VentaItem venta={item} />;
          }}
        />
        <FAB
          title="+"
          onPress={() => {
            //navigation.navigate("ContactsFormNav", {});
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingVertical: 40,
  },
});
