import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Pressable, Dimensions} from 'react-native';
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
            <Pressable
              onPress={handleAccept}
              style={styles.button}>
              <Text style={styles.buttonText}>Accept</Text>
            </Pressable>
          </View>
        </View>
      </View>
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
    backgroundColor: 'white',
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

