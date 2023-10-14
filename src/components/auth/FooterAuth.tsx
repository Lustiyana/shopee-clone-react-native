import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const FooterAuth = ({text, labelLink, onPress}: any) => {
  return (
    <View style={{width: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FAFAFA',
          justifyContent: 'center',
          paddingVertical: 16,
        }}>
        <Text style={{fontSize: 16}}>{text}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{fontSize: 16, color: '#4581EA'}}>{labelLink}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FooterAuth;
