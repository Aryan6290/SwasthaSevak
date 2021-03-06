/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface BPboxProps {
  name: string;
  phone: string;
  address: string;
  email: string;
}

const BPbox: React.FC<BPboxProps> = props => {
  return (
    <View style={styles.boxStyle}>
      <View
        style={{
          flexDirection: 'row',
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center', padding: 16, flex: 1}}>
          <MatIcons name="shopping-search" color="#64b5f6" size={56} />
          <Text style={styles.nameStyle}>{props.name}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              marginLeft: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: 16,
            }}>
            <MatIcons name="phone" color="#64b5f6" size={22} />
            <Text style={styles.titleStyle}>{props.phone}</Text>
          </View>
          <View
            style={{
              marginLeft: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: 16,
            }}>
            <MatIcons name="home" color="#64b5f6" size={22} />
            <Text style={styles.titleStyle}>{props.address}</Text>
          </View>
          <View
            style={{
              marginLeft: 16,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <MatIcons name="charity" color="#64b5f6" size={22} />
            <Text style={styles.titleStyle}>{props.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  boxStyle: {
    marginVertical: 20,
    alignSelf: 'center',
    width: '95%',
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
  },
  nameStyle: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
  titleStyle: {
    paddingRight: 16,
    fontSize: 14,
    marginLeft: 10,
    color: '#555',
  },
});
export default BPbox;
