import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function ProfileScreen({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#F44F21',
        paddingHorizontal: 16,
        paddingVertical: 16,
        gap: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          gap: 8,
        }}>
        <Icon name="settings-outline" color={'white'} size={32} />
        <Icon name="cart-outline" color={'white'} size={32} />
        <Icon name="chatbubbles-outline" color={'white'} size={32} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon name="person-circle" color={'white'} size={64} />
        <View style={{flexDirection: 'row', gap: 16}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              paddingHorizontal: 16,
              paddingVertical: 8,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight: '600', fontSize: 16, color: '#F44F21'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderWidth: 1,
              borderColor: 'white',
            }}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{fontWeight: '600', fontSize: 16, color: 'white'}}>
              Daftar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProfileScreen;
