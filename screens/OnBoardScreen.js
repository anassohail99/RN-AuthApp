//import liraries
import React from 'react';
import {View, Text, StyleSheet, Button, Image, StatusBar} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// create a component
const OnboardScreen = ({navigation}) => {
  return (
    <Onboarding
      //   SkipButtonComponent={Skip}
      onSkip={() => {
        navigation.navigate('LoginScreen');
      }}
      onDone={() => {
        navigation.navigate('LoginScreen');
      }}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../assets/onboarding-img1.png')} />,
          title: 'CONNECT TO THE WORLD',
          subtitle: 'A NEW WAY TO CONNECT WITH THE WORLD',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../assets/onboarding-img2.png')} />,
          title: 'SHARE YOUR FAVOURITES',
          subtitle: 'SHARE YOUR THOUGHS WITH SI,ILAR KIND OF PEOPLE',
        },
        {
          backgroundColor: '#E9BCBE',
          image: <Image source={require('../assets/onboarding-img3.png')} />,
          title: 'BECOME A STAR',
          subtitle: 'LET THE SPOT LIGHT CAPTURE YOU',
        },
      ]}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Nunito-Black',
  },
});

//make this component available to the app
export default OnboardScreen;
// https://www.youtube.com/watch?v=ZxP-0xbz5sg&pbjreload=101
