/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamsList} from '../data/params';

interface SplashScreenProps {
  navigation: StackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList, 'SPLASH'>;
}

const SplashScreen: React.FunctionComponent<SplashScreenProps> = props => {
  const redirectToPage = async () => {
    // check for token
    const token = await AsyncStorage.getItem('token');

    // if exists
    if (token) {
      props.navigation.reset({
        index: 0,
        routes: [
          {
            name: 'HOME',
          },
        ],
      });
    } else {
      props.navigation.reset({
        index: 0,
        routes: [
          {
            name: 'LOGIN',
          },
        ],
      });
    }
  };
  useEffect(() => {
    setTimeout(async () => {
      await redirectToPage();
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={{height: 200, width: 200}}
        source={require('../../assets/splash.png')}
      />
      <Text style={styles.textStyle}>SwasthaSewak </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
