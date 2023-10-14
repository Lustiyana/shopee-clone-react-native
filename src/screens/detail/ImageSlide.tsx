import React, {useRef} from 'react';
import {Dimensions, Image, ScrollView} from 'react-native';

const images = [
  require('../../assets/images/detail-1.jpeg'),
  require('../../assets/images/detail-2.jpeg'),
  require('../../assets/images/detail-3.jpeg'),
];
const {width} = Dimensions.get('window');

const ImageSlide = () => {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}>
      {images.map((item, index) => (
        <Image source={item} key={index} style={{width, height: width}} />
      ))}
    </ScrollView>
  );
};

export default ImageSlide;
