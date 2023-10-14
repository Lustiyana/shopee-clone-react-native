import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/auth/Button';
import ButtonAuth from '../components/auth/ButtonAuth';
import FooterAuth from '../components/auth/FooterAuth';
import FormInput from '../components/auth/FormInput';

export default function LoginScreen({navigation}: any) {
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
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
      }}>
      <View style={{marginTop: 32}}>
        <View style={{alignItems: 'center', marginBottom: 16}}>
          <Image
            source={require('../assets/images/shopee-logo.png')}
            style={{width: 64, height: 64}}
          />
        </View>
        <View style={{paddingHorizontal: 32, gap: 8}}>
          <FormInput
            onChangeText={(e: any) => setNumber(e)}
            placeholder="No. Handphone/Email/Username"
            icon="person-outline"
          />
          <FormInput
            onChangeText={(e: any) => setPassword(e)}
            placeholder="Password"
            icon="lock-closed-outline"
          />
          <Button active={login} label="Log In" />
          <TouchableOpacity>
            <Text style={{textAlign: 'right', fontSize: 16, color: '#4581EA'}}>
              Log in dengan no. handphone
            </Text>
          </TouchableOpacity>
        </View>
        <ButtonAuth label="Log In" />
      </View>
      <FooterAuth
        text="Belum punya akun?"
        labelLink="Daftar"
        onPress={() => navigation.navigate('Register')}
      />
    </SafeAreaView>
  );
}
