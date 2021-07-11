/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

interface PlasmaScreenProps {}

const PlasmaScreen: React.FC<PlasmaScreenProps> = props => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default PlasmaScreen;
