import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ButtonAll() {
  return (
    <TouchableOpacity style={{alignItems: 'center', paddingHorizontal: 24}}>
      <Icon
        name="chevron-forward-circle-outline"
        size={48}
        color={'#ED4D2D'}></Icon>
      <Text style={{color: '#ED4D2D'}}>Lihat Semua</Text>
    </TouchableOpacity>
  );
}
