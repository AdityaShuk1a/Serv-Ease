import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderHistoryCard = ({ title, name, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Completed by: {name}</Text>
        <Text style={styles.info}>Completed on: {date}</Text>
      </View>
    </View>
  )
}

export default OrderHistoryCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginVertical: 5,
    gap : 7,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal : 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  infoContainer: {
    gap : 6,
    flexDirection: 'column',
    paddingVertical: 5,
  },
  info: {
    fontSize: 18,
  },
})
