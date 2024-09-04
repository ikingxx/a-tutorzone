import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function SkillScreen({ navigation }) {
  const [skills, setSkills] = useState([
    "Communication",
    "Time Management",
    "Leadership",
    "Creativity",
    "Teamwork",
    "Multitasking",
    "Flexibility",
    "Critical Thinking",
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
      <View style={styles.tabs}>
        <TouchableOpacity onPress={() => navigation.navigate("Certification")}>
        <Text style={styles.tab}>Certification</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Education")}>
        <Text style={styles.tab}>Education</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Skills")}>
        <Text style={styles.tabActive}>Skills</Text>
        </TouchableOpacity>
        <Text style={styles.tab}>›</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileDescriptionScreen")}>
        <Text style={styles.tab}>Details</Text>
        </TouchableOpacity>
      </View>
       
      </View>

      {/* Skills Section */}
      <View style={styles.skillsSection}>
        <Text style={styles.title}>Skills</Text>
        <Text style={styles.subtitle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <TextInput style={styles.input} placeholder="E.g. Communication" />

        {/* Skill Tags */}
        <ScrollView
          contentContainerStyle={styles.skillsContainer}
          horizontal={false}
        >
          {skills.map((skill, index) => (
            <TouchableOpacity key={index} style={styles.skillTag}>
              <Text style={styles.skillText}>{skill}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.previousButton}
          onPress={() => navigation.navigate("Certification")}
        >
          <Text style={styles.previousButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton}
        onPress={() => navigation.navigate("ProfileDescriptionScreen")}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE", // Blue color for the tabs
  },
 tabActive: {
    fontSize: 16,
    marginHorizontal: 5,
    color: "#0000EE", // Active tab
    fontWeight: "bold",
  },
  skillsSection: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#6e6e6e",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillTag: {
    backgroundColor: "#e5f2ff",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  skillText: {
    color: "#007bff",
    fontWeight: "600",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  previousButton: {
    backgroundColor: "#fff",
    borderColor: "#e5e5e5",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  previousButtonText: {
    color: "#000",
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
