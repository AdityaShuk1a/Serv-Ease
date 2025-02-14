import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
const { height } = Dimensions.get("window");
import { styles } from "../../Styles/authStyles";
const primaryColor = "#026977";
const secondaryColor = "#ebefee";
const tertiaryColor = "white";
const fourthColor = "grey";
const SignUpStepTwo = ({ handleStepTwo }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (password === confirmPassword) {
      handleStepTwo(email, password);
    }
  }, [email, password, confirmPassword]);

  return (
    <>
      <Text style={styles.FormText}>Email</Text>

      <TextInput
      placeholderTextColor="grey"
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={styles.input}
      />
      <Text style={styles.FormText}>Password</Text>
      <TextInput
      placeholderTextColor="grey"
        value={password}
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
      placeholderTextColor="grey"
        value={confirmPassword}
        textContentType="password"
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="confirm password"
        secureTextEntry
        style={styles.input}
      />
    </>
  );
};

export default SignUpStepTwo;
