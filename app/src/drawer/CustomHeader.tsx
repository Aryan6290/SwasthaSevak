/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface IconProps {
  onPress: () => void;
  title: String;
  name: string;
}
const openDrawer = () => {};

const NavigationHeader: React.FC<IconProps> = props => {
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
      </View>
      <Pressable
        android_ripple={{radius: 23, color: 'gray', borderless: true}}
        style={styles.iconStyle}
        onPress={props.onPress}>
        <Icon
          style={{marginTop: 2}}
          name={props.name}
          size={32}
          color="#64b5f6"
        />
      </Pressable>
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  iconStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    color: '#64b5f6',
    marginLeft: 16,
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#000',
    marginTop: 18,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
  },
});
