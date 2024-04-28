import React from 'react';
import { View, Image } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = () => {
  const images = [
    require('../../assets/ad4.jpg'),
    require('../../assets/ad5.jpg'),
    require('../../assets/ad6.jpg'),
  ];

  const renderItem = ({ item }) => (
    <View style={{ borderRadius: 8, overflow: 'hidden' }}>
      <Image source={item} style={{ width: '100%', height: 200 }} />
    </View>
  );

  return (
    <Carousel
      data={images}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={350}
      autoplay={true}
      autoplayDelay={3000}
      loop={true}
    />
  );
};

export default MyCarousel;
