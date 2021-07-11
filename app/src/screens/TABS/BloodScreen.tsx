/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import BPbox from '../../components/BPbox';

import DonorBox from '../../components/DonorBox';
import {Donor} from '../../models/DonorModel';
import {getDonors, getSellers} from '../../services/HomeServices';

interface BloodScreenProps {
  onPress: () => void;
}

const BloodScreen: React.FC<BloodScreenProps> = () => {
  const [donors, setdonors] = useState<Donor[]>([]);
  const getData = async () => {
    const res = await getDonors();
    setdonors(res);
    console.log(donors);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {donors == [] ? (
          <View></View>
        ) : (
          <View>
            {donors.map((item, _i) => (
              <DonorBox
                blood={item.blood}
                plasma={item.plasma}
                key={item._id}
                name={item.userDetails.name}
                address={item.userDetails.address}
                phone={item.userDetails.phoneNum.toString()}
                email={item.bloodDetails}
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
export default BloodScreen;
