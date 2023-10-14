import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FormInput = ({icon, onChangeText, placeholder}: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        alignItems: 'center',
      }}>
      <Icon name={icon} size={32}></Icon>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
};

export default FormInput;
