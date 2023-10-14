import React, {useState, useRef, useEffect} from 'react';
import {View, Image, Dimensions, ScrollView} from 'react-native';
import {items} from '../data/carouselData';

const {width} = Dimensions.get('window');

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(newIndex);
      scrollViewRef?.current?.scrollTo({
        x: newIndex * width,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}>
      {items.map((item, index) => (
        <View key={index} style={{backgroundColor: 'black'}}>
          <Image
            source={item}
            style={{
              width,
              height: 124,
              objectFit: 'contain',
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Carousel;
