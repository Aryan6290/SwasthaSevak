import AsyncStorage from '@react-native-async-storage/async-storage';
import {RouteProp, DrawerActions} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import DonateItem from '../components/DonateItem';
import {DrawerNavParamList} from '../data/params';
import NavigationHeader from '../drawer/CustomHeader';

interface DonateScreenProps {
  navigation: StackNavigationProp<DrawerNavParamList, 'DONATE'>;
  route: RouteProp<DrawerNavParamList, 'DONATE'>;
}

const DonateScreen: React.FC<DonateScreenProps> = props => {
  const [beds, setBeds] = useState(0);
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
      {userType == 'user' && <DonateItem />}
      {userType == 'hospital' && (
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text>Set Beds</Text>
          <TextInput
            style={{borderWidth: 0.7, borderColor: '#000', marginTop: 10}}
            value={beds.toString()}
            onChangeText={text => setBeds(Number(text))}
          />
          <Pressable style={styles.btnStyle}>
            <Text style={styles.btnTextStyle}>Submit</Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btnStyle: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#F50057',
    padding: 20,
    elevation: 5,
  },
  btnTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
export default DonateScreen;
