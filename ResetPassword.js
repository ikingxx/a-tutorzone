import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ResetPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Rest Password!</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="New password"
        secureTextEntry={true}
      />
      <Text style={styles.label}> Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry={true}
      />

      

      <TouchableOpacity style={styles.RestButton}
      onPress={() => navigation.navigate("SuccessfullyUpdated")}>
        <Text style={styles.ResetButtonText}>Rest Password</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 0,
  },
  label: {
    width: "95%",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    width: "95%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
  },
  RestButton: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  ResetButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
});
