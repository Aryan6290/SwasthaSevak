import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {donateStuff} from '../services/HomeServices';
import {showToast} from '../utils/ShowToast';

interface DonateItemProps {}

const DonateItem: React.FC<DonateItemProps> = props => {
  const submit = async () => {
    const res = await donateStuff(isEnabled, isEnabled2, bg, details);
    if (res) {
      showToast("Added to donor's list");
    }
  };
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [details, setDetails] = useState('');
  const [bg, setBG] = useState('');
  const [selectedValue, setSelectedValue] = useState('plasma');
  return (
    <View style={styles.boxStyle}>
      <View>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{fontSize: 18}}> Blood </Text>
          <Switch
            style={{alignSelf: 'flex-start'}}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginBottom: 10,
          }}>
          <Text style={{fontSize: 18}}> Plasma </Text>
          <Switch
            style={{alignSelf: 'flex-start'}}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
      </View>
      <Text>Blood Group</Text>
      <TextInput
        style={{
          borderWidth: 0.7,
          borderColor: '#000',
          marginTop: 5,
          marginBottom: 5,
        }}
        value={bg}
        onChangeText={text => setBG(text)}
      />
      <Text>Details</Text>
      <TextInput
        style={{borderWidth: 0.7, borderColor: '#000', marginTop: 5}}
        value={details}
        onChangeText={text => setDetails(text)}
      />
      <Pressable onPress={() => submit()} style={styles.btnStyle}>
        <Text style={styles.btnTextStyle}>Submit</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  boxStyle: {
    alignSelf: 'center',
    marginTop: 20,
    width: '90%',
    backgroundColor: '#fff',
    padding: 16,
    elevation: 5,
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
  pickerStyle: {
    alignSelf: 'stretch',
    borderColor: '#333',
    borderWidth: 0.6,
  },
});
export default DonateItem;
