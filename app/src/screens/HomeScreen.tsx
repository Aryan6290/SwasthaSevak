import {
  DrawerActions,
  NavigationContainer,
  RouteProp,
} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamsList} from '../data/params';
import NavigationHeader from '../drawer/CustomHeader';
import bottomTabs from '../tabs/bottomTabs';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'HOME'>;
  route: RouteProp<RootStackParamsList, 'HOME'>;
}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const openNavigationDrawer = () => {
    props.navigation.dispatch(DrawerActions.openDrawer);
  };
  return <></>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
