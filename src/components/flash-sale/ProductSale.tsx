import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {items} from '../../data/saleData';
import {formatter} from '../../utils/formatter';
import {stylesSection} from '../../styles/stylesSection';
import ButtonAll from '../atoms/ButtonAll';

export default function ProductSale() {
  return (
    <ScrollView horizontal style={{marginTop: 18}}>
      <View style={styles.container}>
        {items.map(item => (
          <View key={item.id} style={styles.productWrapper}>
            <Image source={item.image} style={stylesSection.productImage} />
            <View style={styles.priceTag}>
              <Text style={styles.rpText}>Rp</Text>
              <Text style={[styles.rpText, styles.priceText]}>
                {formatter(item.price)}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View style={styles.stockWrapper}>
                <View
                  style={{
                    width: `${(item.sold / item.stock) * 100}%`,
                    ...styles.soldParam,
                  }}></View>

                <Text style={styles.stockText}>STOK TERBATAS</Text>
              </View>
            </View>
          </View>
        ))}
        <ButtonAll />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    marginStart: 12,
  },
  productWrapper: {
    gap: 12,
  },
  priceTag: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rpText: {
    color: '#ED4D2D',
  },
  priceText: {
    fontSize: 20,
    fontWeight: '700',
  },
  stockWrapper: {
    backgroundColor: '#F5C1B6',
    borderRadius: 99,
    height: 15,
    width: '85%',
  },
  soldParam: {
    backgroundColor: '#ED1C17',
    height: 15,
    borderTopStartRadius: 99,
    borderBottomStartRadius: 99,
    position: 'absolute',
  },
  stockText: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
    fontSize: 10,
  },
});
