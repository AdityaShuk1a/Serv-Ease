import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
} from 'react-native';
import React from 'react';
const {height} = Dimensions.get('window').height;
const {width} = Dimensions.get('window').width;
const ConsumerHomePage = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.title}>
        <Text style={styles.titleText}>Home</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.advertisement}>
          <Image
            source={require('../../assets/advertisementImage.jpg')}
            style={styles.advertisementImage}
          />
        </View>
        <Text style={styles.advertisementText}>
          EASY • PEEZY • SERVICE • BREEZY
        </Text>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomInnerContainer}>
            <View style={styles.bottomInnerTextContainer}>
              <View>
                <Text style={styles.bottomInnerText} numberOfLines={2}>
                  Book a
                </Text>
                <Text style={styles.bottomInnerText} numberOfLines={2}>
                  Service
                </Text>
              </View>
            </View>
            <View style={styles.bottomInnerImageContainer}>
              <Image
                source={require('../../assets/HomeBottomContainerImage.png')}
                style={styles.bottomInnerImage}
              />
            </View>
          </View>
        </View>
        <View style={styles.bottomSecondContainer}>
          <View style={styles.bottomInnerContainer}>
            <View style={styles.bottomInnerImageContainer}>
              <Image
                source={require('../../assets/HomeBottomClipboardImage.png')}
                style={styles.bottomSecondInnerImage}
              />
            </View>
            <View style={styles.bottomInnerTextContainer}>
              <View>
                <Text style={styles.bottomInnerText} numberOfLines={2}>
                  Recent
                </Text>
                <Text style={styles.bottomInnerText} numberOfLines={2}>
                  Bookings
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ConsumerHomePage;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white',
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
    backgroundColor: 'white',
    height: height,
    width: width,
  },
  advertisement: {
    overflow: 'hidden',
    height: 300,
    width: width,
    borderWidth: 2,
    borderColor: 'black',
    marginVertical: 10,
    marginHorizontal: 25,
    backgroundColor: 'white',
    borderRadius: 50,
    // alignItems : "center",
    justifyContent: 'left',
  },
  bottomInnerImage: {
    borderRadius: 50,
    width: 200,
    height: 300,
  },
  advertisementImage: {
    height: 300,
    width: width,
    borderRadius: 50,
  },
  bottomInnerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomInnerText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'black',
  },
  bottomInnerContainer: {
    marginTop: 60,
    height: 190,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 70,
    marginHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  advertisementText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
  },
  bottomInnerImageContainer: {
    flex: 1,
    borderRadius: 50,
    marginBottom: 90,
    marginRight: 57,
  },
  bottomSecondContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 30,
    marginHorizontal: 25,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSecondInnerImage: {
    marginTop: 30,
    borderRadius: 50,
    width: 200,
    height: 250,
  },
});
