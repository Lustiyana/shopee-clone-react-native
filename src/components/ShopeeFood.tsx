import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {stylesSection} from '../styles/stylesSection';
import Carousel from './Carousel';
import ProductFood from './shopeefood/ProductFood';

export default function ShopeeFood() {
  return (
    <View style={stylesSection.container}>
      <View style={{padding: 8}}>
        <Carousel />
      </View>
      <ProductFood />
    </View>
  );
}
