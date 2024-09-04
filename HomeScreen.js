import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const logoRotation = useRef(new Animated.Value(0)).current;
  const appNameBrightness = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo rotation animation (one-time)
    Animated.timing(logoRotation, {
      toValue: 1,
      duration: 3000, // Adjust duration as needed
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    // App name brightness animation (continuous loop)
    Animated.loop(
      Animated.timing(appNameBrightness, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const rotateInterpolation = logoRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const brightnessInterpolation = appNameBrightness.interpolate({
    inputRange: [0, 1],
    outputRange: ["white", "red"],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Animated.Image
          source={require("../assets/logo.png")}
          style={[
            styles.logo,
            {
              transform: [{ rotate: rotateInterpolation }],
            },
          ]}
        />
      </TouchableOpacity>
      <Animated.Text
        style={[
          styles.appName,
          {
            color: brightnessInterpolation,
          },
        ]}
      >
        Tutor Zone
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 0,
  },
  appName: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 20,
  },
});
