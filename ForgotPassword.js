import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot Password</Text>
      <Text>No Worries we will send you instructions to reset</Text>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={styles.RestButton}
        onPress={() => navigation.navigate("Emailverify")}
      >
        <Text style={styles.RestButtonText}>Reset Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image style={styles.icon} />
        <Text style={styles.buttonText}>Back to Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "Center",
    alignItems: "Center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 10,
  },
  label: {
    width: "95%",
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    width: "95%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  RestButton: {
    flexDirection: "row",
    marginTop: 250,
    marginBottom: 5,
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
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
  RestButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
