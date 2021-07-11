import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

interface DonateItemProps {}

const DonateItem: React.FC<DonateItemProps> = props => {
  const [bg, setBG] = useState('');
  const [selectedValue, setSelectedValue] = useState('plasma');
  return (
    <View style={styles.boxStyle}>
      <View style={[styles.pickerStyle, {marginTop: 8}]}>
        <Picker
          selectedValue={selectedValue}
          style={styles.pickerStyle}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Blood" value="blood" />
          <Picker.Item label="Plasma" value="plasma" />
        </Picker>
      </View>
      <TextInput
        style={{borderWidth: 0.7, borderColor: '#000', marginTop: 20}}
        value={bg}
        onChangeText={text => setBG(text)}
      />
      <Pressable style={styles.btnStyle}>
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
