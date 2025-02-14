import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect} from 'react';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const primaryColor = 'black';
const secondaryColor = '#ebefee';
const tertiaryColor = 'white';
const fourthColor = 'grey';

const ProfileTopButtons = ({icon}) => {
  const navigation = useNavigation();
  const [iconName, setIconName] = useState(icon);

  useEffect(() => {
    setIconName(icon);
  }, [icon]);

  return (
    <Pressable onPress={() => navigation.navigate('Home')} >
      <View style={styles.buttonContainer}>
        <Icon name={iconName} size={30} color={primaryColor} />
      </View>
    </Pressable>
  );
};

export default ProfileTopButtons;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: tertiaryColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
