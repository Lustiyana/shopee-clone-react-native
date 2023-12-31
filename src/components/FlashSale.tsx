import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CountdownTimer from './flash-sale/CountDown';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductSale from './flash-sale/ProductSale';
import {stylesSection} from '../styles/stylesSection';

export default function FlashSale() {
  return (
    <View style={stylesSection.container}>
      <View style={styles.headerWrapper}>
        <CountdownTimer />
        <TouchableOpacity style={styles.buttonAll}>
          <Text style={styles.textAll}>Lihat Semua</Text>
          <Icon name="chevron-forward-outline" size={16}></Icon>
        </TouchableOpacity>
      </View>
      <ProductSale />
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  buttonAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textAll: {
    fontSize: 12,
  },
});
