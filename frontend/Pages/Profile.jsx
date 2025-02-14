import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions,
  } from 'react-native';
  import React, {useState, useContext, useEffect} from 'react';
  const primaryColor = '#026977';
  const secondaryColor = '#f6f6f6';
  const tertiaryColor = 'white';
  const fourthColor = 'grey';
  const fifthColor = '#30db86';
  const {height} = Dimensions.get('window').height;
  const {width} = Dimensions.get('window').width;
  const Profile = () => {
    
    
  
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
                <Text style={styles.topContainerInnerText}>Dynamic name</Text>
              </View>
              <View>
                <Text style={styles.topContainerInnerSmallText}>
                  DynamicMail
                </Text>
              </View>
            </View>
            <View style={styles.topContainerInnerBottomContainer}>
              
            </View>
          </View>
          <ScrollView style={styles.bottomContainer}>
            <Text style={styles.bottomContainerInnerText}>Status</Text>
            
          </ScrollView>
          
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
  