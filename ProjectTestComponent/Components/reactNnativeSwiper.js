import React, { Component } from 'react';
import {
	AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
/* https://github.com/leecade/react-native-swiper#custom-basic-style--content */
import Swiper from 'react-native-swiper';

let _swiper = {
  index:0,
  loop:false,
  horizontal:true,
  showsButtons:false,
  autoplay:false,
  loadMinimal:false
};

export default class SwiperDome extends Component {
  render() {
    return (
     <Swiper style={styles.wrapper} {..._swiper}>
        <View style={styles.slide1}>
          <Text style={styles.text}>呵呵</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>哈哈</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>嘻嘻</Text>
        </View>
      </Swiper>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
