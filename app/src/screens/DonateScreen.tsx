import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp, DrawerActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DrawerNavParamList} from '../data/params';
import NavigationHeader from '../drawer/CustomHeader';

interface DonateScreenProps {
  navigation: StackNavigationProp<DrawerNavParamList, 'DONATE'>;
  route: RouteProp<DrawerNavParamList, 'DONATE'>;
}

const DonateScreen: React.FC<DonateScreenProps> = props => {
  const [userType, setUserType] = useState<string | null>('user');
  const getData = async () => {
    const a = await AsyncStorage.getItem('userType');
    setUserType(a);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
        title={userType == 'hospital' ? 'LIST BEDS' : 'DONATE'}
        name="md-menu"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
export default DonateScreen;
