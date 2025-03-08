import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { insertProductos } from "./screens/insertProductos";
import { insertVentas } from "./screens/insertVentas";
import { listProductos } from "./screens/listProductos";
import { listVentas } from "./screens/listVentas";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const StackContacts = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="insertVentas">
        <StackContacts.Screen
          component={insertProductos}
          name="insertProductos"
        />
        <StackContacts.Screen component={insertVentas} name="insertVentas" />
        <StackContacts.Screen component={listProductos} name="listProductos" />
        <StackContacts.Screen component={listVentas} name="listVentas" />
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
