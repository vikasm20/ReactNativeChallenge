import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View, Animated, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {splashGIF} from '../../Const/Assets';
import { primaryColor, whiteColor } from '../../Const/Colors';

function SplashScreen({navigation}) {
  const leftMargin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(leftMargin, {
      toValue: Dimensions.get('window').width / 2,
      duration: 2500,
    }).start();
  }, []);

  return (
    <>
      <LinearGradient style={{height:'100%', flex:1}} colors={[primaryColor, primaryColor, primaryColor, whiteColor]}>
        <Image
          source={splashGIF}
          style={{width: '100%', height: '60%'}}
          resizeMode={'contain'}
        />
        <View style={[{alignSelf: 'center'}]}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 40}}>
            MusicoFy
          </Text>
          <Animated.View
            style={{
              position: 'absolute',
              backgroundColor: primaryColor,
              width: 200,
              height: 50,
              marginLeft: leftMargin,
            }}></Animated.View>
        </View>
      </LinearGradient>
    </>
  );
}

export default SplashScreen;
