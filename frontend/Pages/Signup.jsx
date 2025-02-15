import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SignUpStepOne from '../Components/SignUpComponents.js/SignUpStepOne';
import SignUpStepTwo from '../Components/SignUpComponents.js/SignUpStepTwo';
import SignUpStepThree from '../Components/SignUpComponents.js/SignUpStepThree';
import {styles} from '../Styles/authStyles';
const {width} = Dimensions.get('window').width;
import {UserContext} from '../App'; // Import from App.js
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import RotatingGearLoader from '../Components/RotatingGearLoader';
function Signup() {
  const navigation = useNavigation();
  const {setUser} = useContext(UserContext);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [service, setService] = useState('');
  const [userType, setUserType] = useState('');
  const [loading, setLoading] = useState(false);
  const handleStepOne = (userFirstName, userLastName, userMiddleName) => {
    setFirstName(userFirstName);
    setLastName(userLastName);
    setMiddleName(userMiddleName);
  };

  const handleStepTwo = (userEmail, userPassword) => {
    setEmail(userEmail);
    setPassword(userPassword);
  };

  const handleStepThree = (userAadhar, userService, userType) => {
    setUserType(userType);
    setAadhar(userAadhar);
    setService(userService);
  };
  const handleSubmit = async () => {
    setLoading(true);
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      setLoading(false);
      alert('First name is required and should contain only alphabets.');
      return;
    }

    if (middleName && !/^[a-zA-Z]+$/.test(middleName)) {
      setLoading(false);
      alert('Middle name should contain only alphabets.');
      return;
    }

    if (lastName && !/^[a-zA-Z]+$/.test(lastName)) {
      setLoading(false);
      alert('Last name should contain only alphabets.');
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setLoading(false);
      alert('Enter a valid email.');
      return;
    }

    if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        password,
      )
    ) {
      setLoading(false);
      alert(
        'Password must be at least 6 characters long with one uppercase, one lowercase, one number, and one special character.',
      );
      return;
    }

    if (!/^\d{12}$/.test(aadhar)) {
      setLoading(false);
      alert('Aadhar should be exactly 12 digits.');
      return;
    }

    if (typeof userType !== 'string' || typeof service !== 'string') {
      setLoading(false);
      alert('User type and service should be valid strings.');
      return;
    }

    const name = firstName;
    if (userType === "0"){
      try {
        const response = await axios.post(
          `https://code-a-haunt-production-0c59.up.railway.app/auth/register/${userType}`,
          {
            name: firstName,
            email: email,
            password: password,
            aadhaar: aadhar,
            phone: 1212121212,
            address: {
              apartment_number: '101',
              building: 'Sunshine Apartments',
              landmark: 'Near City Park',
              pin: '560001',
              street: 'Main Street',
            },
          },
        );
        console.log(response.data);
        if (response.data) {
          setUser({
            name,
            lastName,
            middleName,
            email,
            password,
            aadhar,
            userType,
            service,
          });
          setLoading(false);
          
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      } 
    }else{
      try {
        const response = await axios.post(
          `https://code-a-haunt-production-0c59.up.railway.app/auth/register/${userType}`,
          {
            name: firstName,
            email: email,
            password: password,
            aadhaar: aadhar,
            phone: 1212121212,
            address: {
              apartment_number: '101',
              building: 'Sunshine Apartments',
              landmark: 'Near City Park',
              pin: '560001',
              street: 'Main Street',
            },
            "category": service
          },
        );
        console.log(response.data);
        if (response.data) {
          setUser({
            name,
            lastName,
            middleName,
            email,
            password,
            aadhar,
            userType,
            service,
          });
          setLoading(false);
          
        }
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    }
    
    navigation.navigate('LandingPage');
  };

  return (
    <>
      {loading && <RotatingGearLoader /> ? (
        <RotatingGearLoader />
      ) : (
        <ImageBackground
          source={require('../assets/ServEaseLogoBanner.png')}
          style={styles.backgroundImage}
          resizeMode="cover">
          <View style={styles2.title}>
            <Text style={styles2.titleText}>Sign Up</Text>
          </View>
          <View style={styles.overlay}>
            {/* <Text style={styles.title}>Sign Up</Text> */}
          </View>

          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.bottomContainer}>
              <View style={styles.innerContainer}>
                {step === 1 ? (
                  <SignUpStepOne handleStepOne={handleStepOne} step={step} />
                ) : step === 2 ? (
                  <SignUpStepTwo handleStepTwo={handleStepTwo} />
                ) : (
                  <SignUpStepThree
                    handleStepThree={handleStepThree}
                    handleSubmit={handleSubmit}
                  />
                )}
              </View>

              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.button}
                  onPress={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}>
                  <Text
                    style={[
                      styles.buttonText,
                      step === 1 && styles.disabledText,
                    ]}>
                    Prev
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.button}
                  onPress={() => setStep(Math.min(3, step + 1))}
                  disabled={step === 3}>
                  <Text
                    style={[
                      styles.buttonText,
                      step === 3 && styles.disabledText,
                    ]}>
                    Next
                  </Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      )}
    </>
  );
}

const styles2 = StyleSheet.create({
  title: {
    backgroundColor: 'white',
    width: width,
    padding: 15,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 400,
    color: 'black',
    // marginLeft :  20
  },
});

export default Signup;
