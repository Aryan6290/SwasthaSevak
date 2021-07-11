/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import MatIcons from 'react-native-vector-icons/MaterialCommunityIcons';
interface DonorBox {
  name: string;
  phone: string;
  address: string;
  email: string;
  blood: boolean;
  plasma: boolean;
}

const DonorBox: React.FC<DonorBox> = props => {
  return (
    <View style={styles.boxStyle}>
      <View
        style={{
          flexDirection: 'row',
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <View style={{alignItems: 'center', padding: 16, flex: 1}}>
          <MatIcons name="account" color="#64b5f6" size={56} />
          <Text style={styles.nameStyle}>{props.name}</Text>
          <View
            style={{
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Blood </Text>
            <Switch
              style={{alignSelf: 'flex-start'}}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={props.blood ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              value={props.blood}
            />
            <Text>Plasma </Text>
            <Switch
              style={{alignSelf: 'flex-start'}}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={props.blood ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              value={props.plasma}
            />
          </View>
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
    marginTop: 0,
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
export default DonorBox;
