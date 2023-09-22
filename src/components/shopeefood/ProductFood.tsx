import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {items} from '../../data/foodData';
import {stylesSection} from '../../styles/stylesSection';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonAll from '../atoms/ButtonAll';

export default function ProductFood() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flexDirection: 'row',
          gap: 12,
          marginTop: 12,
          alignItems: 'center',
          marginStart: 8,
        }}>
        {items.map(item => (
          <View
            key={item.id}
            style={{borderWidth: 0.5, borderColor: '#c4c4c4', width: 142}}>
            <Image source={item.image} style={stylesSection.productImage} />
            <View style={{padding: 4, gap: 6}}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '600',
                }}
                numberOfLines={2}>
                {item.store}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                  }}>
                  <Icon name="star" color={'#FFBB1D'}></Icon>
                  <Text style={{color: '#7A7A7A'}}>{item.rating}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                  }}>
                  <Icon name="time-outline" color={'#ED4E2E'}></Icon>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#ED4E2E'}}>{item.time}</Text>
                    <Text style={{color: '#ED4E2E'}}>min</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
        <ButtonAll />
      </View>
    </ScrollView>
  );
}
