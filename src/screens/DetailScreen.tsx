import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageSlide from './detail/ImageSlide';

const DetailScreen = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <ImageSlide />
      <Text style={{color: 'black', fontSize: 20}}>Nama Product</Text>
      <Text style={{color: 'red', fontSize: 24}}>Rp91.100</Text>
      <View
        style={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          paddingVertical: 16,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', gap: 4}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                {Array.from({length: 5}).map(item => (
                  <Icon name="star" color={'#FFBB1D'} size={16}></Icon>
                ))}
              </View>
              <Text>5.0</Text>
            </View>
            <Text>|</Text>
            <Text>863 Terjual</Text>
          </View>
          <View>
            <Icon name="heart-outline" size={24}></Icon>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
