/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import HospitalBox from '../../components/HospitalBox';
import {Hospital} from '../../models/HospitalModel';
import {getHospitals} from '../../services/HomeServices';

interface BedsScreenProps {}

const BedsScreen: React.FC<BedsScreenProps> = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const getData = async () => {
    const res = await getHospitals();
    setHospitals(res);
    console.log(hospitals);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {hospitals == [] ? (
        <View></View>
      ) : (
        <View>
          {hospitals.map((item, _i) => (
            <HospitalBox
              name={item.name}
              address={item.address}
              phone={item.phoneNum.toString()}
              beds={6 * (_i + 4) + 1}
            />
          ))}
        </View>
      )}
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
export default BedsScreen;
