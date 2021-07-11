/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import BPbox from '../../components/BPbox';

interface BloodScreenProps {
  onPress: () => void;
}

const BloodScreen: React.FC<BloodScreenProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BPbox />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default BloodScreen;
