import React, {useEffect, useState} from 'react';
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
import {styles} from '../Styles/authStyles';

const {height} = Dimensions.get('window'); // Get screen height
const secondaryColor = '#ebefee';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');
  useEffect(() => {
    const authUser = async ()  => {
      const getData = await axios
        .get('https://trad-com-production.up.railway.app/consumer/all', {
          email: data.email,
          password: data.password,
        })
        .then(response => {
          setData(response.data);
          console.log(response.data);
    });
    };
    authUser()
  }, []);

  const handleSubmit = () => {
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email');
      return;
    }

    if (password.length < 5 || password.includes(' ')) {
      alert(
        'Password must be at least 5 characters long and should not contain spaces',
      );
      return;
    }

    let hasUpper = false,
      hasLower = false,
      hasNumber = false;
    for (let char of password) {
      if (char >= 'A' && char <= 'Z') hasUpper = true;
      if (char >= 'a' && char <= 'z') hasLower = true;
      if (char >= '0' && char <= '9') hasNumber = true;
    }

    if (!(hasUpper && hasLower && hasNumber)) {
      alert(
        'Password must contain at least one uppercase letter, one lowercase letter, and one number',
      );
      return;
    }

    const user = data.find(value => value.email === email && value.password === password);
    if (user) {
      setUser(user);
      console.log(user);
      alert('Login successful');
      navigation.navigate('LandingPage');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
   
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/LoginPageImage.jpg')}
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

      );
}

export default Login;
