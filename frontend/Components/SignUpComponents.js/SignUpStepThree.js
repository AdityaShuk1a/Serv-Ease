import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../Styles/authStyles";
import SignupButton from "./SignupButton";
import { radioButtonStyles } from "../../Styles/radioButtonStyle";
/**
 * SignUpStepThree is the third step of the sign up process where the user has to
 * enter their aadhar number and select a user type (consumer or service provider).
 * If the user selects service provider, they have to enter the service they provide.
 * The component also renders a SignupButton to navigate to the next screen.
 */
const SignUpStepThree = ({ handleStepThree, handleSubmit }) => {
  const [aadhar, setAadhar] = useState("");
  const [userType, setUserType] = useState("0");
  const [service, setService] = useState("");
  useEffect(() => {
    handleStepThree(aadhar, service, userType);
  }, [aadhar, service, userType]);
  return (
    <View>
      <TextInput
      placeholderTextColor="grey"
        value={aadhar}
        onChangeText={(text) => setAadhar(text)}
        placeholder="Aadhar"
        style={styles.input}
      />

      {/* Radio Button Options */}
      <View style={radioButtonStyles.radioContainer}>
        <TouchableOpacity
          style={radioButtonStyles.radioButton}
          onPress={() => setUserType("0")}
        >
          <View
            style={
              userType === "0"
                ? radioButtonStyles.radioSelected
                : radioButtonStyles.radioUnselected
            }
          />
          <Text style={radioButtonStyles.radioText}>Sign up as Consumer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={radioButtonStyles.radioButton}
          onPress={() => setUserType("1")}
        >
          <View
            style={
              userType === "1"
                ? radioButtonStyles.radioSelected
                : radioButtonStyles.radioUnselected
            }
          />
          <Text style={radioButtonStyles.radioText}>
            Sign up as Service Provider
          </Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Input for Service Provider */}
      {userType === "1" && (
        <TextInput
        placeholderTextColor="grey"
          placeholder="Enter your service"
          style={styles.input}
          value={service}
          onChangeText={(text) => setService(text)}
        />
      )}

      <SignupButton handleSubmit={handleSubmit} />
    </View>
  );
};

export default SignUpStepThree;

