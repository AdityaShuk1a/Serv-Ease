import { StyleSheet, Text, View, TextInput, Pressable, Dimensions } from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
import axios from "axios";
const secondaryColor = '#f6f6f6';
import { UserContext } from '../App';

const OfferPage = ({handleDone, item}) => {
    const {user, setUser} = useContext(UserContext);
    const userData = user
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const navigation = useNavigation();

  const submitOffer = async () => {
    // Handle offer submission logic here
    await axios.post(`https://code-a-haunt-production-0c59.up.railway.app/offer/requests/${item.id}/offers/create`, { message: description, price : price, service_provider_id : userData.id}).then(console.log("sent"));

    handleDone(1);
  };

  return (
    <>
    
            <View style={styles.container}>
     <View style={styles.textAreaContainer}>
               <TextInput
               value={description}
               onChangeText={setDescription}
                 textContentType='addressCity'
                 style={styles.textArea}
                 placeholder="Description"
                 placeholderTextColor="black"
                 multiline={true}
                 />
             </View>
      <TextInput
        style={styles.input}
        placeholderTextColor={"black"}
        placeholder="Enter Price"
        value={price}
        onChangeText={setPrice}
      />
      <Pressable style={styles.button} onPress={submitOffer}>
        <Text style={styles.buttonText}>Done</Text>
      </Pressable>
    </View>
    </>
    
  );
};

export default OfferPage;

const styles = StyleSheet.create({
    title: {
        backgroundColor: secondaryColor,
        width: width,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'black',
      },
      titleText: {
        fontSize: 30,
        fontWeight: 500,
        color: 'black',
        // marginLeft :  20
      },
  container: {
    flex: 1,
    padding: 20,
  },
  descriptionContainer: {
    height: height ,
  },
  descriptionHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionInput: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: height * 0.3,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  textArea: {
    width: width * 0.83,
    backgroundColor: '#D3D3D3',
    paddingLeft: 15,
    paddingTop: 15,
    color: 'black',
    fontWeight: '00',
    fontSize: 18,
    textAlign: 'left',
  },
  textAreaContainer: {
    width: width * 0.83,
    height: 200,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
  },
});

