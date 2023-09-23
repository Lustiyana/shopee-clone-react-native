import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {items} from '../../data/foodData';
import {stylesSection} from '../../styles/stylesSection';
import Icon from 'react-native-vector-icons/Ionicons';
import ButtonAll from '../atoms/ButtonAll';
import {StyleSheet} from 'react-native';

export default function ProductFood() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.shopeefoodWrapper}>
        {items.map(item => (
          <View key={item.id} style={styles.foodWrapper}>
            <Image source={item.image} style={stylesSection.productImage} />
            <View style={{padding: 4, gap: 6}}>
              <Text style={styles.storeText} numberOfLines={2}>
                {item.store}
              </Text>
              <View style={styles.ratingTimeWrapper}>
                <View style={styles.ratingWrapper}>
                  <Icon name="star" color={'#FFBB1D'}></Icon>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
                <View style={styles.timeWrapper}>
                  <Icon name="time-outline" color={'#ED4E2E'}></Icon>
                  <View style={styles.timeTextWrapper}>
                    <Text style={styles.timeText}>{item.time}</Text>
                    <Text style={styles.timeText}>min</Text>
                  </View>
                </View>
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
  shopeefoodWrapper: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
    alignItems: 'center',
    marginStart: 8,
  },
  foodWrapper: {
    borderWidth: 0.5,
    borderColor: '#c4c4c4',
    width: 142,
  },
  storeText: {
    fontSize: 14,
    color: 'black',
    fontWeight: '600',
  },
  ratingTimeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  ratingText: {
    color: '#7A7A7A',
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  timeTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: '#ED4E2E',
  },
});
