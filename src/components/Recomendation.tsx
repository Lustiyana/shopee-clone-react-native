import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {stylesSection} from '../styles/stylesSection';
import {items} from '../data/recomendationData';
import {formatter} from '../utils/formatter';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Recomendation({navigation}: any) {
  return (
    <View style={{marginTop: 16}}>
      <Text
        style={{
          backgroundColor: 'white',
          color: '#ED4D2D',
          fontWeight: '700',
          fontSize: 20,
          paddingHorizontal: 8,
          paddingVertical: 12,
        }}>
        REKOMENDASI
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          rowGap: 8,
          columnGap: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {items.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail')}
            key={item.id}
            style={{backgroundColor: 'white', paddingBottom: 8}}>
            <Image source={item.image} style={{width: 196, height: 196}} />
            <View style={{paddingHorizontal: 12, gap: 8}}>
              <Text style={{color: 'black', fontSize: 16}}>{item.name}</Text>
              <View style={{flexDirection: 'row', gap: 6}}>
                <Text
                  style={{
                    backgroundColor: '#D3031B',
                    color: 'white',
                    fontWeight: '600',
                    paddingHorizontal: 4,
                  }}>
                  COD
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                    backgroundColor: 'rgba(255, 187, 29, 0.3)',
                    borderColor: '#FFBB1D',
                    borderWidth: 1,
                    paddingHorizontal: 4,
                    borderRadius: 4,
                  }}>
                  <Icon name="star" color={'#FFBB1D'}></Icon>
                  <Text style={{color: 'black'}}>{item.rating}</Text>
                </View>
              </View>
              <Text style={{color: '#ED4D2D', fontSize: 20}}>
                Rp{formatter(item.price)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
