import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, View, Text, Pressable, Dimensions, Animated} from 'react-native';
import axios from 'axios';
import OfferPage from '../Pages/OfferPage';
const {height} = Dimensions.get('window').height;
const {width} = Dimensions.get('window').width;
const primaryColor = 'black';
const secondaryColor = '#ebefee';
const tertiaryColor = 'white';
const fourthColor = 'grey';
import {useNavigation} from '@react-navigation/native';
const ServiceProviderRequestListItems = ({item, title, description}) => {

  const slideAnim = useRef(new Animated.Value(70)).current;
  const AppearAnim = useRef(new Animated.Value(0)).current;  // Start off-screen

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // Move to position 0
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(AppearAnim, {
      toValue: 1, // Move to position 0
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  const [page, setPage] = useState(1);
  const navigation = useNavigation();
console.log(item)
  const handleAccept = () => {
    setPage(2);
  };

  const handleDone = () => {
    setPage(1);
  };

  if (page === 1) {
    return (
            <Animated.View style={{transform: [{translateY: slideAnim}]}}>
      <View style={styles.card}>
        <View style={styles.cardTopContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.cardBottomContainer}>
          <View style={styles.cardRow}>
            <Text style={styles.cardLabel}>Description:</Text>
            <Text style={styles.cardText}>{description}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Animated.View style={{opacity: AppearAnim}}>

              <Pressable
                onPress={handleAccept}
                style={styles.button}>
                <Text style={styles.buttonText}>Accept</Text>
              </Pressable>

            </Animated.View>
          </View>
        </View>
      </View>
            </Animated.View>
    );
  } else if (page === 2) {
    return <OfferPage handleDone={handleDone} item={item}/>;
  }
};

export default ServiceProviderRequestListItems;

const styles = StyleSheet.create({
  card: {
    width: width * 0.79,
    margin: 10,
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: primaryColor,
    backgroundColor: tertiaryColor,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: primaryColor,
    textAlign: 'left',
  },
  cardLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: primaryColor,
  },
  cardText: {
    fontSize: 16,
    color: fourthColor,
    marginTop: 4.5,
    marginLeft: 15,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    width: '70%',
  },
  cardTopContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start', // Align items to the left
    marginBottom: 15,
  },
  cardBottomContainer: {
    flexDirection: 'column',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#CFEC46',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

