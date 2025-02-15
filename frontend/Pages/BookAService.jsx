import React, { useState } from 'react';
import { Dimensions, View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, Pressable, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

// import ImagePicker from 'react-native-image-picker';
// import ProgressBar from './ProgressBar';
// import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

const imageFilter = {
  tintColor: '#CFEC46'
};


// Get screen dimensions
const { height, width } = Dimensions.get('window');

function BookAService() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const onChange = (event, selectedDate) => {
    setShowPicker(false); // Hide the picker after selection
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const selectImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    };
d
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Error:', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const captureImage = () => {
    let options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.errorMessage) {
        console.log('Error:', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
    });
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
        <View style={styles.UpperLeftDiv}>
          <Text style={{ color: 'white', fontSize: 47, paddingTop: 25, fontWeight: 'bold' }}>
            Book a service
          </Text>
        </View>

        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <View style={styles.UpperRightDiv}></View>
          <Image style={[{ width: 65, height: 65, marginTop: 10 }, imageFilter]} source={require('.././assets/glitter-2-svgrepo-com.png')} />

        </View>
      </View>



      <View style={styles.ServiceBookingForm}>

        {/* Picker */}
        <View style={styles.inputContainer}>
          <Picker mode="dropdown" dropdownIconColor={'black'} style={styles.picker}>
            <Picker.Item style={styles.picker} label="Choose a service..." value="" />
            <Picker.Item label="Car Wash" value="car_wash" />
            <Picker.Item label="Home Cleaning" value="home_cleaning" />
            <Picker.Item label="Plumbing" value="plumbing" />
          </Picker>
        </View>

        {/* Title Input */}
        <TextInput style={styles.input} placeholder="Title" placeholderTextColor="black" />

        {/* Description Input */}
        <View style={styles.textAreaContainer}>
          <TextInput
            textContentType='addressCity'
            style={styles.textArea}
            placeholder="Description"
            placeholderTextColor="black"
            multiline={true}
            />
        </View>
        {/* Date Picker Button */}
        <View style={styles.inputContainer}>
          <Pressable onPress={() => setShowPicker(true)}
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
            >
            <Text style={{padding: 10}}>Select a Date</Text>
            <Fontisto name="calendar" size={19} color="black"
               style={{padding: 10}}  
               />

          </Pressable>
        </View>

        {showPicker && (
          <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          />
        )}
          
        <Text style={{paddingRight: width*0.47, marginBottom: 15, fontSize: 20,}}>Select an Image</Text>
      <View style={{
        width: width * 0.83,
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        // paddingHorizontal: 15,
        // marginBottom: 20,
        flexDirection: 'row',
        padding: 30,
        
      }}>

        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

        <TouchableOpacity style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}  
        onPress={selectImage}>
          <Feather name="image" size={80} color="black" />
          <Text style={{textAlign: 'center', fontWeight:20}}>Choose from Gallery</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: 'black', width: 1, height: '90%', marginHorizontal: 29}}></View>
        <TouchableOpacity style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'blue',
        }}
        onPress={captureImage}>
          <Feather name="camera" size={80} color="black" />  
          <Text style={{textAlign: 'center', fontWeight: 20}}>Capture from Camera</Text>
        </TouchableOpacity>
      </View>



      
      </View>


    </ScrollView>
    <View style={{alignItems: 'center'}}>

      <Pressable style={{
        width: width * 0.3,
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        marginBottom: 55,
        height: height * 0.05,
        
      }}>
        <Text style={{textAlign: 'center', fontWeight: 20, fontSize: 20}}>Submit</Text>
      </Pressable>
        </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  UpperLeftDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFEC46',
    height: height * 0.15,
    width: width * 0.8,
    borderBottomRightRadius: 20,
  },
  UpperRightDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CFEC46',
    height: height * 0.05,
    width: width * 0.2,
  },
  ServiceBookingForm: {
    backgroundColor: 'white',
    height: height * 0.85,
    width: width,
    paddingTop: height * 0.05,
    alignItems: 'center',
    marginTop: width*0.05
  },
  inputContainer: {
    width: width * 0.83,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  picker: {
    color: 'black',
    fontWeight: '500',
    fontSize: 18,
  },
  input: {
    width: width * 0.83,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: 15,
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 20,
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

export default BookAService;

