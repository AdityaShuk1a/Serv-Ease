import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const OrderHistory = () => {
  const history = [{
    "id" : 1,
    "titile" : "AC Repair",
    "Done by" : "John Doe",
    "date" : "10/10/2021"
  },
  {
    "id" : 2,
    "titile" : "AC Repair",
    "Done by" : "John Doe",
    "date" : "10/10/2021"
  },
  {
    "id" : 3,
    "titile" : "AC Repair",
    "Done by" : "John Doe",
    "date" : "10/10/2021"
  },
  {
    "id" : 4,
    "titile" : "AC Repair",
    "Done by" : "John Doe",
    "date" : "10/10/2021"
  },
  {
    "id" : 5,
    "titile" : "AC Repair",
    "Done by" : "John Doe",
    "date" : "10/10/2021"
  },
  {
    "id" : 6,
    "titile" : "AC Repair",
    "Done by" : "John Doe",
    "date" : "10/10/2021"
  }
];

  return (
    <>
      <View style={styles.mainContainer}>
        <Text>hellol</Text>
      </View>
    </>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
