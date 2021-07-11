/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {SafeAreaView} from 'react-native-safe-area-context';
import BPbox from '../../components/BPbox';
import HospitalBox from '../../components/HospitalBox';
import {Hospital} from '../../models/HospitalModel';
import {getSellers} from '../../services/HomeServices';

interface PlasmaScreenProps {}

const PlasmaScreen: React.FC<PlasmaScreenProps> = props => {
  const [sellers, setsellers] = useState<Hospital[]>([]);
  const getData = async () => {
    const res = await getSellers();
    setsellers(res);
    console.log(sellers);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {sellers == [] ? (
          <View></View>
        ) : (
          <View>
            {sellers.map((item, _i) => (
              <BPbox
                key={item._id}
                name={item.name}
                address={item.address}
                phone={item.phoneNum.toString()}
                email={item.email}
              />
            ))}
          </View>
        )}
      </ScrollView>
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
export default PlasmaScreen;
