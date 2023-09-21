import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.balanceWrapper}>
        <View style={styles.contentWrapper}>
          <View style={styles.scanWrapper}>
            <Icon name="scan-outline" size={32}></Icon>
            <View style={styles.line}></View>
          </View>
          <View style={styles.itemWrapper}>
            <View>
              <View style={styles.nominalWrapper}>
                <Icon name="wallet-outline" color="#ED4D2D" size={16}></Icon>
                <Text style={styles.nominalText}>Rp5.970</Text>
              </View>
              <Text style={styles.informationText}>Isi Saldo</Text>
            </View>
            <View style={styles.line}></View>
            <View>
              <View style={styles.nominalWrapper}>
                <Image source={require('../assets/images/icons/coin.png')} />
                <Text style={styles.nominalText}>10</Text>
              </View>
              <Text style={styles.informationText}>Gratis Koin 25RB!</Text>
            </View>
            <View style={styles.line}></View>
            <View>
              <View style={styles.nominalWrapper}>
                <Image
                  source={require('../assets/images/icons/transfer.png')}
                />
                <Text style={styles.nominalText}>Transfer</Text>
              </View>
              <Text style={styles.informationText}>Gratis</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
  },

  balanceWrapper: {
    position: 'absolute',
    width: '90%',
    top: -16,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
  },
  contentWrapper: {
    backgroundColor: 'white',
    // width: '75%',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  scanWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    backgroundColor: '#c4c4c4',
    width: 1,
    height: 32,
    marginHorizontal: 10,
  },
  nominalWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  nominalText: {
    fontSize: 16,
    color: 'black',
  },
  informationText: {
    fontSize: 8,
  },
});
