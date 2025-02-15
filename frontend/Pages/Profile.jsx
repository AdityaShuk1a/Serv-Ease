import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
  } from 'react-native';
  import React, {useState, useContext, useEffect} from 'react';
  import ProfileTopButtons from '../Components/ProfilePageComponentes/ProfileTopButtons';
  import ProfileBottomComponent from '../Components/ProfilePageComponentes/ProfileBottomComponent';
  import {UserContext} from '../App';
  import Footer from '../Components/HomePageComponents/Footer';
  const primaryColor = '#026977';
  const secondaryColor = '#f6f6f6';
  const thirdColor = '#ebefee';
  import ConsumerProfileView from '../Components/ProfilePageComponentes/ConsumerProfileView';
  const tertiaryColor = 'white';
  const fourthColor = 'grey';
  const fifthColor = '#30db86';
  import axios from 'axios';
import ProfileServiceProvider from '../Components/ProfilePageComponentes/ProfileServiceProvider';
  const {height} = Dimensions.get('window').height;
  const {width} = Dimensions.get('window').width;
  const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    const userData = user;
    const [customData, setCustomData] = useState();
    const [data, setData] = useState([
      {
        id: '1',
        name: 'John Doe',
        serviceType: 'Cleaning',
        rating: '4.5',
      },
      {
        id: '2',
        name: 'Mallu Doe',
        serviceType: 'BartanDhoing',
        rating: '6.9',
      },
      {
        id: '3',
        name: 'Katrina Saif',
        serviceType: 'Nachni',
        rating: '1.9',
      },
      {
        id: '4',
        name: 'Bondu Singh',
        serviceType: 'Driver',
        rating: '4.9',
      },
    ]);
  
    useEffect(() => {
      console.log(userData);
    }, [userData]);
  
    return (
      <>
        <View style={styles.title}>
        
          <Text style={styles.titleText}>Profile</Text>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.topContainer}>
            <View style={styles.userImage}>
              <Image
                source={require('../assets/icon.jpg')}
                style={styles.userImage}
              />
            </View>
            <View>
              <View>
                <Text style={styles.topContainerInnerText}>{user.name}</Text>
              </View>
              <View>
                <Text style={styles.topContainerInnerSmallText}>
                  {user.email}
                </Text>
              </View>
            </View>
            <View style={styles.topContainerInnerBottomContainer}>
              <ProfileTopButtons icon="home-outline" />
              <ProfileTopButtons icon="notifications-outline" />
              <ProfileTopButtons icon="pencil" />
            </View>
          </View>
          <View style={{
            flex : 1
          }} >
          {userData.userType === "0" || userData.serviceType === "0" ? (
              <ConsumerProfileView data={data} />
            ) : (
              <ProfileServiceProvider />
            )}
          </View>
        </ScrollView>
        
      </>
    );
  };
  
  export default Profile;
  
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
      width: width,
      height: height,
      backgroundColor: secondaryColor,
      padding: 20,
    },
    topContainer: {
      borderWidth: 0.2,
      borderColor: 'black',
      width: width,
      height: '180',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: fifthColor,
      padding: 20,
      gap: 40,
      borderRadius: 40,
    },
    topContainerInnerBottomContainer: {
      position: 'absolute',
      bottom: -25,
      flexDirection: 'row',
      marginHorizontal: 35,
      justifyContent: 'space-evenly',
      width: '90%',
    },
    userImage: {
      borderWidth: 0.3,
      borderColor: 'black',
      width: 80,
      height: 80,
      backgroundColor: primaryColor,
      borderRadius: 100,
    },
    topContainerInnerText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: secondaryColor,
    },
    topContainerInnerSmallText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: tertiaryColor,
    },
    bottomContainer: {
      marginTop: 25,
      width: '100%',
      height: '75%',
      padding: 10,
      backgroundColor: secondaryColor,
    },
    bottomContainerInnerText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black',
    },
    cards: {
      flexDirection: 'row',
      marginTop: 25,
      borderRadius: 30,
      gap: 20,
    },
  });
  
