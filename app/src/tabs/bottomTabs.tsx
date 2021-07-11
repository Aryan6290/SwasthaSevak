import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DrawerActions, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamsList, TabStackParamsList} from '../data/params';
import NavigationHeader from '../drawer/CustomHeader';
import BedsScreen from '../screens/TABS/BedsScreen';
import BloodScreen from '../screens/TABS/BloodScreen';
import PlasmaScreen from '../screens/TABS/PlasmaScreen';

interface bottomTabsProps {
  navigation: StackNavigationProp<RootStackParamsList, 'HOME'>;
  route: RouteProp<RootStackParamsList, 'HOME'>;
}
const Tab = createBottomTabNavigator<TabStackParamsList>();
const bottomTabs: React.FC<bottomTabsProps> = props => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationHeader
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
        title={'DASHBOARD'}
        name="md-menu"
      />
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: 'absolute',
            top: 130,
            left: 20,
            right: 20,
            height: 70,
            borderRadius: 15,
            elevation: 5,
          },
        }}
        initialRouteName={'BLOOD'}>
        <Tab.Screen
          name="BLOOD"
          children={() => <BloodScreen onPress={() => {}} />}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <MatIcons
                  name="blood-bag"
                  size={30}
                  color={focused ? '#64b5f6' : '#a9a9a9'}
                />
                <Text
                  style={
                    focused
                      ? {color: '#64b5f6', fontSize: 12, marginTop: 4}
                      : {color: '#a9a9a9', fontSize: 12, marginTop: 4}
                  }>
                  Donor
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="PLASMA"
          component={PlasmaScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <MatIcons
                  name="hospital"
                  size={30}
                  color={focused ? '#64b5f6' : '#a9a9a9'}
                />
                <Text
                  style={
                    focused
                      ? {color: '#64b5f6', fontSize: 12, marginTop: 4}
                      : {color: '#a9a9a9', fontSize: 12, marginTop: 4}
                  }>
                  Sellers
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="BEDS"
          component={BedsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{alignItems: 'center'}}>
                <MatIcons
                  name="bed"
                  size={30}
                  color={focused ? '#64b5f6' : '#a9a9a9'}
                />
                <Text
                  style={
                    focused
                      ? {color: '#64b5f6', fontSize: 12, marginTop: 4}
                      : {color: '#a9a9a9', fontSize: 12, marginTop: 4}
                  }>
                  Beds
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default bottomTabs;
