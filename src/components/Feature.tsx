import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {items} from '../data/featureData';

export default function Feature() {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.featureWrapper}>
          <Image source={item.image} style={styles.featureImage} />
          <Text style={styles.featureTitle}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    paddingHorizontal: 32,
    paddingBottom: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    rowGap: 32,
  },
  featureWrapper: {
    width: 65,
    alignItems: 'center',
  },
  featureImage: {
    width: 42,
    height: 42,
  },
  featureTitle: {
    maxWidth: 72,
    fontSize: 10,
    textAlign: 'center',
  },
});
