import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const StackContacts = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackContacts.Navigator initialRouteName="ContactListNav">
        <StackContacts.Screen
          name="ContactListNav"
          component={ContactList}
          options={{ title: "Lista de Contactos" }}
        />
        <StackContacts.Screen
          name="ContactsFormNav"
          component={ContactsForm}
        />
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
