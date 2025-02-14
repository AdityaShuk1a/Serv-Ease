import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import OrderHistoryCard from '../Components/OrderHistoryCard';
const {width} = Dimensions.get('window').width;
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
  ,
  {
    "id" : 6,
    "titile" : "AC Repair",
    "Done by" : "John Doe",
    "date" : "10/10/2021"
  }
];
  return (
    <>
    <View style={styles.title}>
      
      <Text style={styles.titleText}>Order History</Text>
    </View>
    <View style={styles.mainContainer}>
      <ScrollView style={styles.cardContainer} >
      {history.map((items)=>(
        <OrderHistoryCard title={items.titile} name={items["Done by"]} date={items.date} />
      ))}
      </ScrollView>
      
    </View>
    </>
    
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "white",
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
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardContainer: {
    padding: 20,
  },
});
