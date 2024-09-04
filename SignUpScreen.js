import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Image source={require("../assets/logo.png")} style={styles.logo} /> */}
      <Text style={styles.heading}>Sign Up Now!</Text>
      <Text style={styles.label}>User Name</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create An Account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or</Text>

      <TouchableOpacity style={styles.button}>
        <Image source={require("../assets/google.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Image source={require("../assets/facebook.png")} style={styles.icon} />
        <Text style={styles.buttonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.link}>Already Registered? Log In</Text>
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
    alignSelf: "flex-start",
    marginLeft: 20,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 10,
    width: "90%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  createButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    padding: 15,
    borderWidth: 0.5,
    borderColor: "#000",
    borderRadius: 20,
    width: "95%",
    marginBottom: 20,
  },
  createButtonText: {
    color: "#fff",
    textAlign: "center",
    flex: 1,
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  orText: {
    fontSize: 20,
    fontWeight: "300",
    paddingBottom: 20,
  },
});
