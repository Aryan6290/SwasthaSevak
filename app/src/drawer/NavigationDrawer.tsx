/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {DrawerNavParamList, RootStackParamsList} from '../data/params';
import CustomDrawerContent from './CustomDrawerContent';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import bottomTabs from '../tabs/bottomTabs';
import {StackNavigationProp} from '@react-navigation/stack';
import DonateScreen from '../screens/DonateScreen';

const Drawer = createDrawerNavigator<DrawerNavParamList>();

interface NavigationDrawerProps {
  navigation: StackNavigationProp<RootStackParamsList, 'HOME'>;
  route: RouteProp<RootStackParamsList, 'HOME'>;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent navigation={props.navigation} />
      )}
      initialRouteName="DASHBOARD"
      drawerStyle={styles.customDrawerStyle}>
      <Drawer.Screen
        name="DASHBOARD"
        component={bottomTabs}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-outline"
              size={size}
              color={focused ? '#66BB6A' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="DONATE"
        component={DonateScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="home-outline"
              size={size}
              color={focused ? '#66BB6A' : '#ccc'}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="ABOUT"
        component={HomeScreen}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="information"
              size={size}
              color={focused ? '#66BB6A' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  customDrawerStyle: {
    backgroundColor: '#fff',
  },
});

export default NavigationDrawer;
