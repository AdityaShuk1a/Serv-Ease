import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Pressable,
  ImageBackground,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';
import { styles } from '../Styles/authStyles';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { UserContext } from '../App';
import axios from 'axios';
import RotatingGearLoader from '../Components/RotatingGearLoader';

const { height } = Dimensions.get('window'); // Get screen height
const secondaryColor = '#ebefee';

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://code-a-haunt-production-0c59.up.railway.app/auth/login', {
        email,
        password,
      });

      if (!response.data.user_data.user_data.category ) {
        setData({...response.data.user_data.user_data, serviceType: '0'});
        setUser({...response.data.user_data.user_data, serviceType: '0'});
      } else {
        setData({...response.data.user_data.user_data, serviceType: '1'});
        setUser({...response.data.user_data.user_data, serviceType: '1'});
      }
      console.log(response.data.user_data.user_data);
      alert('Login successful');
      setIsLoading(false);
      navigation.navigate('LandingPage');
    } catch (error) {
      alert('Invalid credentials');
      setIsLoading(false);
    }
  };

  return (
    isLoading ? (
      <RotatingGearLoader />
    ) : (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          <ImageBackground
            source={require('../assets/ServEaseLogoBanner.png')}
            style={styles.backgroundImage}>
            <View style={styles.overlay}>
              <Text style={styles.title}>Hello!</Text>
              <Text style={styles.subtitle}>Welcome to ServEase</Text>
            </View>

            {/* Bottom Card */}
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: secondaryColor,
                height: height * 0.62, // 55% of screen height
                width: '100%',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                alignItems: 'center',
                padding: 20,
              }}>
              <View style={styles.innerContainer}>
                <Text style={styles.loginText}>Login</Text>

                <TextInput
                  placeholderTextColor="black"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  placeholder="Email"
                  style={styles.input}
                  keyboardType="email-address"
                />
                <TextInput
                  placeholderTextColor="black"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  placeholder="Password"
                  secureTextEntry
                  style={styles.input}
                />

                <Text style={styles.forgotPassword}>Forgot Password?</Text>

                <Pressable onPress={handleSubmit} style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>

                {/* <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                  <Text style={styles.orText}>Or login with</Text>
                  <View style={styles.divider} />
                </View> */}
                <Pressable
                  onPress={() => {
                    navigation.navigate('Signup');
                  }}>
                  <Text style={styles.signupText}>
                    Not have a account? Sign Up
                  </Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    )
  );
}
export default Login;


