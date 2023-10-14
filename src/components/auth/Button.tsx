import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({active, label}: any) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active ? '#F34E21' : '#EAEAEA',
        paddingVertical: 14,
      }}
      disabled={!active}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: active ? 'white' : '#ADADAD',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
