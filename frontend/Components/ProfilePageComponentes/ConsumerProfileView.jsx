import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
const secondaryColor = '#f6f6f6';
import ProfileBottomComponent from './ProfileBottomComponent';
import ProfileBottomOfferCards from './ProfileBottomOfferCards';
const ConsumerProfileView = ({data}) => {
  return (
    <>
      <ScrollView style={styles.bottomContainer}>
        <Text style={styles.bottomContainerInnerText}>Active Request</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cards}>
          {data.map(item => (
            <ProfileBottomComponent
              key={item.id}
              name={item.name}
              serviceType={item.serviceType}
              rating={item.rating}
            />
          ))}
        </ScrollView>

        <Text style={styles.bottomContainerInnerText}>Offer Received</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.cards}>
          {data.map(item => (
            <ProfileBottomOfferCards
              key={item.id}
              name={item.name}
              serviceType={item.serviceType}
              rating={item.rating}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default ConsumerProfileView;

const styles = StyleSheet.create({
    cards: {
        flexDirection: 'row',
        marginTop: 25,
        borderRadius: 30,
        gap: 20,
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
});


