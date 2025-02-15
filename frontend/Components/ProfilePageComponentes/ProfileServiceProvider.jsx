import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const ProfileServiceProvider = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.totalServices} >
        <Text style={styles.totalServicesText} >Total Services</Text>
        <Text style={styles.totalServicesText} >10</Text>
      </View>
    </View>
  )
}

export default ProfileServiceProvider

const styles = StyleSheet.create({
  mainView: {
    marginTop: 30
  },
  totalServices: {
    
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalServicesText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
