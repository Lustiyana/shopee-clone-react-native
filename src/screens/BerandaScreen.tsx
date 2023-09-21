import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Ads from '../components/Ads';
import Balance from '../components/Balance';
import Carousel from '../components/Carousel';
import Feature from '../components/Feature';
import FlashSale from '../components/FlashSale';

function BerandaScreen() {
  return (
    <ScrollView>
      <Carousel />
      <Balance />
      <Feature />
      <Ads />
      <FlashSale />
    </ScrollView>
  );
}

export default BerandaScreen;
