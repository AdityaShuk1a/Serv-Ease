import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Footer from '../Components/HomePageComponents/Footer';
import Home from './Home';
import Profile from './Profile';
import { BackHandler } from 'react-native';
import ChatBot from './ChatBot';
const LandingPage = () => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    handlePageChange(1);

    const backAction = () => {
      setPage(1);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  
  const handlePageChange = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <>
      {page === 1 ? <Home /> : page === 2 ? <Profile /> : <ChatBot />}
      <Footer handlePageChange={handlePageChange} />
    </>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
