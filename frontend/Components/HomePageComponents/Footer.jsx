import {Dimensions, StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import ADIcon from 'react-native-vector-icons/AntDesign';
import MTIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width} = Dimensions.get('window');
const primaryColor = 'black';
const secondaryColor = '#ebefee';
const tertiaryColor = 'white';
const fourthColor = 'grey';
const Footer = ({handlePageChange}) => {

  return (
    <View style={styles.footerMainContainer}>
      <Pressable
        onPress={() => {
          handlePageChange(1);
        }}>
        <View style={styles.buttonContainer}>
          <Icon name="home-outline" size={30} color={primaryColor} />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          handlePageChange(2);
        }}>
        <View style={styles.buttonContainer}>
          <ADIcon name="user" size={30} color={primaryColor} />
        </View>
      </Pressable>
      <Pressable
        onPress={() => {
          handlePageChange(3)
        }}>
        <View style={styles.buttonContainer}>
          <MTIcon name="robot-happy-outline" size={30} color={primaryColor} />
        </View>
      </Pressable>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerMainContainer: {
    flexDirection: 'row',
    position: 'fixed',
    bottom: 0,
    width: width,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    zIndex: 9999,
  },
  footerMainContainerText: {
    fontSize: 15,
    fontWeight: '100',
    color: 'black',
  },
  buttonContainer: {
    width: 60,
    height: 60,
    backgroundColor: tertiaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
