import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FDC830", "#F37335"],
    title: "Clear",
    subtitle: "Go outside",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#1a2a6c", "#b21f1f", "#0082c8"],
    title: "Thunderstorm",
    subtitle: "WOW stay at home",
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
    title: "Drizzle",
    subtitle: "Xhit, keep an umbrella",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#7F7FD5", "#86A8E7", "#0082c8"],
    title: "Rain",
    subtitle: "WoW it's rainy",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Snow",
    subtitle: "Go outside and jump like doggy",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3C3B3F", "#605C3C"],
    title: "Haze",
    subtitle: "Just don't go outside.",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#C9D6FF", "#E2E2E2"],
    title: "Clouds",
    subtitle: "Umm...so loose...",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Haze",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 42,
    color: "white",
    fontWeight: "300",
    textAlign: "left",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
    textAlign: "left",
  },
  textContainer: {
    paddingHorizontal: 40,
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
  },
});
