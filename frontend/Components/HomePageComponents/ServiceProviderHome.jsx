import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
const {height} = Dimensions.get('window').height;
const {width} = Dimensions.get('window').width;
import ServiceProviderRequestListItems from '../ServiceProviderRequestListItems';
const ServiceProviderHome = () => {
  const navigation = useNavigation();
  const [req, setReq] = useState([]);
  useEffect(() => {
    const getReq = async () => {
      try {
        const response = await axios.get(
          'https://code-a-haunt-production-0c59.up.railway.app/request/all',
        );
        const data = response.data;
        console.log(data);
        setReq(data);
      } catch (error) {
        console.error(error);
      }
    };
    getReq();
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={styles.title}>
        <Text style={styles.titleText}>Home</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.advertisement}>
          <Image
            source={require('../../assets/ServEaseHomepageBanner.png')}
            style={styles.advertisementImage}
          />
        </View>
        <Text style={styles.advertisementText}>
        EASY ❇️ PEEZY ❇️ SERVICE ❇️ BREEZY
        </Text>
        <Text style={{fontSize: 30,fontWeight: 500, marginLeft: 20, marginTop: 50}}>Active Requests</Text>
        <FlatList
          data={req}
          renderItem={({item}) => {
            return (
              <ServiceProviderRequestListItems
                item={item}
                title={item.category}
                description={item.description}
              />
            );
          }}
          contentContainerStyle={{paddingTop: 40}}
        />
      </View>
    </ScrollView>
  );
};

export default ServiceProviderHome;

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
    height: 225,
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
    fontSize: 18.5,
    fontWeight: '700',
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
  advertisementImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

