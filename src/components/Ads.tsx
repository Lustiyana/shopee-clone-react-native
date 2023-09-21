import React from 'react';
import {View, Image} from 'react-native';

export default function Ads() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Image
        source={require('../assets/images/ads.jpg')}
        style={{
          width: '100%',
          height: 122,
          objectFit: 'contain',
        }}
      />
    </View>
  );
}
