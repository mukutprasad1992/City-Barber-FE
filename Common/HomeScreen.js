import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
const Spacer = ({ size }) => <View style={{ width: size }} />;
const HomeScreen = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the CITY BARBER</Text>
      <Text style={styles.subtitle}>This is very easy to USE.</Text>
      <View style={styles.button}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Spacer size={10} />
        <Button title="Register" onPress={() => navigation.navigate("Register")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    marginBottom: 24,
  },
});

export default HomeScreen;
