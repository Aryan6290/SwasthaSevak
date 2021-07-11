/* eslint-disable @typescript-eslint/no-unused-vars */

import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Avatar, Drawer, Title, Caption} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import {Pressable, Switch, TouchableNativeFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet} from 'react-native';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserData} from '../models/LoginModel';
import {getUserDetails} from '../services/LoginServices';

interface CustomDrawerContentProps {
  navigation: DrawerNavigationHelpers;
}

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = props => {
  const [userType, setUserType] = useState<string | null>('user');
  const [userProfilePic, setuserProfilePic] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [name, setName] = useState('');
  const getData = async () => {
    const res: UserData = await getUserDetails();
    const a = await AsyncStorage.getItem('userType');
    setUserType(a);
    setName(res.name);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.navigationItemStyle}>
          <View style={styles.imageStyle}>
            <Avatar.Image source={{uri: userProfilePic}} size={100} />
          </View>
          <View style={styles.userInfoStyle}>
            <Title style={styles.title}>{name}</Title>
          </View>
        </View>
        <Drawer.Section style={styles.drawerStyle}>
          <Drawer.Item
            style={styles.drawerItemStyle}
            label="Home"
            onPress={() => {
              props.navigation.navigate('DASHBOARD');
            }}
            icon={({color, size}) => (
              <Icon name="home" size={size} color="#64b5f6" />
            )}
          />
          <Drawer.Item
            style={styles.drawerItemStyle}
            label="Profile"
            onPress={() => {
              props.navigation.navigate('PROFILE');
            }}
            icon={({color, size}) => (
              <Icon name="person" size={size} color="#64b5f6" />
            )}
          />

          <Drawer.Item
            onPress={() => {
              props.navigation.navigate('DONATE');
            }}
            style={styles.drawerItemStyle}
            label={userType == 'hospital' ? 'List Beds' : 'Donate'}
            icon={({color, size}) => (
              <Icon name="hand-left-outline" size={size} color="#64b5f6" />
            )}
          />

          <Drawer.Item
            onPress={() => {
              AsyncStorage.clear();
              props.navigation.reset({index: 0, routes: [{name: 'SPLASH'}]});
            }}
            style={styles.drawerItemStyle}
            label="Signout"
            icon={({color, size}) => (
              <Icon name="exit" size={size} color="#64b5f6" />
            )}
          />
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <TouchableNativeFeedback
          onPress={() => {
            props.navigation.navigate('ABOUT');
          }}>
          <Drawer.Item
            style={styles.drawerItemStyle}
            label="About"
            icon={({color, size}) => (
              <Icon name="information" size={size} color="#64b5f6" />
            )}
          />
        </TouchableNativeFeedback>
      </Drawer.Section>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageStyle: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  userInfoStyle: {
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationItemStyle: {
    flex: 1,
  },
  title: {
    color: '#333',
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
  },
  switchTextStyle: {
    paddingRight: 10,
    color: '#fff',
    fontSize: 18,

    fontWeight: 'bold',
  },
  caption: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 14,
  },
  bottomDrawerSection: {},
  drawerStyle: {
    marginTop: 15,
  },
  drawerItemStyle: {
    paddingVertical: 10,
    marginRight: 5,
  },
  switchContainerStyle: {
    marginTop: 20,
    flexDirection: 'row',
  },
});
export default CustomDrawerContent;
