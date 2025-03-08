import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { InsertProductos } from "./screens/insertProductos";
import { InsertVentas } from "./screens/insertVentas";
import { ProductoList } from "./screens/listProductos";
import { ListVentas } from "./screens/listVentas";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const StackContacts = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="listVentasNav">
        <StackContacts.Screen
          component={InsertProductos}
          name="insertProductos"
        />
        <StackContacts.Screen component={InsertVentas} name="insertVentasNav" />
        <StackContacts.Screen
          component={ProductoList}
          name="listProductosNav"
        />
        <StackContacts.Screen component={ListVentas} name="listVentasNav" />
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
