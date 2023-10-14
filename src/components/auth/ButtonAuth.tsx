import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const dataButton = [
  {
    name: 'Google',
    image: require('../../assets/images/logos/google.png'),
  },
  {
    name: 'Facebook',
    image: require('../../assets/images/logos/facebook.png'),
  },
  {
    name: 'Whatsapp',
    image: require('../../assets/images/logos/whatsapp.png'),
  },
];
export default function ButtonAuth({label}: any) {
  return (
    <View style={{paddingHorizontal: 32, gap: 12, marginTop: 12}}>
      <View>
        <Text style={{fontSize: 16}}>Atau</Text>
      </View>
      {dataButton.map((item: any, index: any) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            padding: 8,
            borderRadius: 4,
            borderColor: '#c4c4c4',
          }}>
          <Image style={{width: 24, height: 24}} source={item.image} />
          <Text style={{fontSize: 20, textAlign: 'center', width: '100%'}}>
            {label} with {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
