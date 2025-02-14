import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../../Styles/authStyles";

const SignupButton = ({ handleSubmit }) => {
  return (
    <Pressable
      onPress={() => {
        handleSubmit(); // Call signup function
         // Navigate to Profile page
      }}
      style={styles.loginButton}
    >
      <Text style={styles.loginButtonText}>Sign Up</Text>
    </Pressable>
  );
};

export default SignupButton;
