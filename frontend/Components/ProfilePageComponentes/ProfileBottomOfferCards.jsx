import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
const { height } = Dimensions.get("window");
const { width } = Dimensions.get("window");
const primaryColor = "black";
const secondaryColor = "#ebefee";
const tertiaryColor = "white";
const fourthColor = "grey";

const ProfileBottomComponent = ({  name, serviceType, rating }) => {
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setDeclined(false);
  };

  const handleDecline = () => {
    setAccepted(false);
    setDeclined(true);
  };

  return (
    <View style={styles.card}>
      <View style={styles.cardTopContainer}>
        <Text style={styles.cardTitle}>{name}</Text>
      </View>
      <View style={styles.cardBottomContainer}>
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Service Type:</Text>
          <Text style={styles.cardText}>{serviceType}</Text>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.cardLabel}>Rating:</Text>
          <Text style={styles.cardText}>{rating}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={handleAccept}
            disabled={accepted}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={handleDecline}
            disabled={declined}
          >
            <Text style={styles.buttonText}>Decline</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileBottomComponent;

const styles = StyleSheet.create({
  card: {
    width: width * 0.79,
    margin: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: primaryColor, 
    backgroundColor: tertiaryColor,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: primaryColor,
    textAlign: "left", 
  },
  cardLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: primaryColor,
  },
  cardText: {
    fontSize: 20,
    color: fourthColor,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  cardTopContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start", // Align items to the left
    marginBottom: 15,
  },
  cardBottomContainer: {
    flexDirection: "column",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

