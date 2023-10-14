import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Button from '../components/auth/Button';
import ButtonAuth from '../components/auth/ButtonAuth';
import FooterAuth from '../components/auth/FooterAuth';
import FormInput from '../components/auth/FormInput';
import CheckBox from '@react-native-community/checkbox';

export default function RegisterScreen({navigation}: any) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
            placeholder="No. Handphone/Email/Username"
            icon="call-outline"
          />
          <Button active label="Lanjut" />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Aktifkan Shopeepay sekarang</Text>
          </View>
        </View>
        <ButtonAuth label="Daftar" />
      </View>
      <View>
        <Text style={{textAlign: 'center', paddingHorizontal: 32}}>
          Dengan mendaftar, Anda setuju dengan Syarat & Ketentuan & Kebijakan
          Shopee
        </Text>
        <FooterAuth
          text="Sudah punya akun?"
          labelLink="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}
