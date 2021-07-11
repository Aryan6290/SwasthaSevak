import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RootStackParamsList} from '../data/params';
import {LoginResponse} from '../models/LoginModel';
import {loginUser} from '../services/LoginServices';
import {showToast} from '../utils/ShowToast';
interface LoginScreenProps {
  navigation: StackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList, 'LOGIN'>;
}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const [selectedValue, setSelectedValue] = useState('user');
  const navigateToHome = async () => {
    if (passWord != '') {
      const res: LoginResponse = await loginUser(
        phone,
        passWord,
        selectedValue,
      );
      if (res.status == true) {
        AsyncStorage.setItem('token', res.data);
        AsyncStorage.setItem('userType', selectedValue);
        console.log(selectedValue);
        props.navigation.reset({
          index: 0,
          routes: [
            {
              name: 'HOME',
            },
          ],
        });
      } else {
        showToast('Wrong  phone Number or password');
      }
    } else {
      showToast('Insert your phone Number and password');
    }
  };
  const navigateToSignup = () => {
    props.navigation.reset({
      index: 0,
      routes: [
        {
          name: 'SIGNUP',
        },
      ],
    });
  };
  const [phone, setphone] = useState<number>(0);
  const [passWord, setpassWord] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>SwasthaSewak </Text>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../assets/splash.png')}
      />
      <View style={styles.boxStyle}>
        <TextInput
          label="Phone"
          keyboardType={'phone-pad'}
          theme={{colors: {primary: '#64b5f6'}}}
          style={{marginVertical: 20}}
          value={phone.toString()}
          onChangeText={text => setphone(Number(text))}
        />
        <TextInput
          theme={{colors: {primary: '#64b5f6'}}}
          label="Password"
          value={passWord}
          onChangeText={text => setpassWord(text)}
        />
        <Text style={{marginTop: 14}}>User type</Text>
        <View style={[styles.pickerStyle, {marginTop: 8}]}>
          <Picker
            selectedValue={selectedValue}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Normal" value="user" />
            <Picker.Item label="Donor" value="distributor" />
            <Picker.Item label="Hospital" value="hospital" />
          </Picker>
        </View>
        <Pressable onPress={navigateToHome} style={styles.signInBtnStyle}>
          <Text style={styles.btnTextStyle}>Sign in</Text>
        </Pressable>
        <Pressable onPress={navigateToSignup} style={styles.registerBtnStyle}>
          <Text style={styles.btnTextStyle2}>New user? Sign up !</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerStyle: {
    alignSelf: 'stretch',
    borderColor: '#333',
    borderWidth: 0.6,
  },
  boxStyle: {
    padding: 16,
    borderRadius: 15,
    margin: 20,
    alignSelf: 'stretch',

    elevation: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  signInBtnStyle: {
    marginTop: 20,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#64b5f6',
    padding: 12,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerBtnStyle: {
    marginVertical: 20,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTextStyle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  btnTextStyle2: {
    color: '#64b5f6',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LoginScreen;
