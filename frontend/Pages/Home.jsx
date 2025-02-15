import {StyleSheet, Text, View} from 'react-native';
import React, { useContext, useState } from 'react';
import ConsumerHomePage from '../Components/HomePageComponents/ConsumerHomePage';
import ServiceProviderHome from '../Components/HomePageComponents/ServiceProviderHome';
import { UserContext } from '../App';
const Home = () => {
  const {user, setUser} = useContext(UserContext);
  const userData = user
  return (
    <>
    {userData.userType === '0' || userData.serviceType === '0'  ? <ConsumerHomePage /> : <ServiceProviderHome />}
      
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
