import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableHighlight,
} from "react-native";
import { useState, useEffect } from "react";
import { getVentas } from "../rest_client/tiendalinea";
import { Button, ListItem, FAB } from "@rneui/base";
export const ListVentas = () => {
  const [ventasList, setVentasList] = useState();
  const fnRefreshList = (list) => {
    setVentasList(list);
  };
  /*useEffect(() => {
    getVentas(fnRefreshList);
    console.log("useEffect usado");
  }, []);*/
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
          getVentas(fnRefreshList);
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
