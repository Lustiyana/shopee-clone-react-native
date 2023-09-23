import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Ads from '../components/Ads';
import Balance from '../components/Balance';
import Carousel from '../components/Carousel';
import Feature from '../components/Feature';
import FlashSale from '../components/FlashSale';
import Recomendation from '../components/Recomendation';
import ShopeeFood from '../components/ShopeeFood';

function BerandaScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Carousel />
      <Balance />
      <Feature />
      <Ads />
      <FlashSale />
      <ShopeeFood />
      <Recomendation />
    </ScrollView>
  );
}

export default BerandaScreen;
