import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "../../Styles/authStyles";

const SignUpStepOne = ({ handleStepOne }) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userMiddleName, setUserMiddleName] = useState("");

  // Save data when moving to the next step
  useEffect(() => {
    handleStepOne(userFirstName, userLastName, userMiddleName);
  }, [userFirstName, userLastName, userMiddleName]);

  return (
    <>
      <Text style={styles.FormText}>Full Name</Text>
      <TextInput
      placeholderTextColor="grey"
        value={userFirstName}
        onChangeText={(text) => {
          setUserFirstName(text);
        }}
        placeholder="Firstname"
        style={styles.input}
      />
      <TextInput
      placeholderTextColor="grey"
        value={userMiddleName}
        onChangeText={(text) => setUserMiddleName(text)}
        placeholder="Middlename"
        style={styles.input}
      />
      <TextInput
      placeholderTextColor="grey"
        value={userLastName}
        onChangeText={(text) => setUserLastName(text)}
        placeholder="Lastname"
        style={styles.input}
      />
    </>
  );
};

export default SignUpStepOne;
