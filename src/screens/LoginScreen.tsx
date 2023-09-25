import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export default function LoginScreen({navigation}) {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const [isUseNumber, setIsUseNumber] = useState(false);

  useEffect(() => {
    if (number !== '' && password !== '') {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [number, password]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      <View style={{marginTop: 32}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/shopee-logo.png')}
            style={{width: 72, height: 72}}
          />
        </View>
        <SafeAreaView style={{paddingHorizontal: 32, gap: 8}}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            <Icon name="person-outline" size={32}></Icon>
            <TextInput
              placeholder="No. Handphone/Email/Username"
              onChangeText={e => setNumber(e)}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            <Icon name="lock-closed-outline" size={32}></Icon>
            <TextInput
              placeholder="Password"
              onChangeText={e => setPassword(e)}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: login ? '#F34E21' : '#EAEAEA',
              paddingVertical: 14,
            }}
            disabled={!login}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: login ? 'white' : '#ADADAD',
              }}>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{textAlign: 'right', fontSize: 16, color: '#4581EA'}}>
              Log in dengan no. handphone
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={{width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#FAFAFA',
            justifyContent: 'center',
            paddingVertical: 16,
          }}>
          <Text style={{fontSize: 16}}>Belum punya akun?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 16, color: '#4581EA'}}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
