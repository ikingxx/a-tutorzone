import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";


export default function LoginScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Log In Now!</Text>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.label}>User Name or Email</Text>
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

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.forgotPasswordText}>
            Forgot Password
            <Text style={styles.link}></Text>
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}
      onPress={() => navigation.navigate("CategorySelectionScreen")}>
        <Text style={styles.loginButtonText}>Login</Text>
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

      <TouchableOpacity>
        <Text style={styles.signUpText}>
          Don't have an account?
          <Text
            onPress={() => navigation.navigate("SignUp")}
            style={styles.link}
          >
            Sign Up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
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
    marginBottom: 5,
    marginTop:5,
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
    marginBottom: 10,
  },
  button: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 8,
    backgroundColor: "#fff",
    padding: 12,
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
  loginButton: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  orText: {
    fontSize: 15,
    fontWeight: "300",
    marginVertical: 2,
  },
  signUpText: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  link: {
    paddingLeft: 5,
    color: "blue",
    textDecorationLine: "underline",
  },
  forgotPasswordContainer: {
    width: "100%", // Ensure the container spans full width
    alignItems: "flex-end", // Aligns children to the right
  },
  forgotPasswordText: {
    color: "blue",
    paddingHorizontal: 20,
    textDecorationLine: "underline",
  },
});
