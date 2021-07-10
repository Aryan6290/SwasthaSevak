import React from 'react';
import {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const [name, setName] = useState('');
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
          label="Email"
          theme={{colors: {primary: '#64b5f6'}}}
          style={{marginVertical: 20}}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          label="Password"
          value={passWord}
          onChangeText={text => setpassWord(text)}
        />
        <Pressable style={styles.signInBtnStyle}>
          <Text style={styles.btnTextStyle}>Sign in</Text>
        </Pressable>
        <Pressable style={styles.registerBtnStyle}>
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
