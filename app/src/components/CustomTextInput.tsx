import * as React from 'react';
import {
  ColorValue,
  KeyboardTypeOptions,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomInputProps {
  icon: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  textColor: string;
  keyboard: KeyboardTypeOptions;
  inputBGColor: ColorValue;
}

const CustomInput: React.FC<CustomInputProps> = props => {
  return (
    <View
      style={[styles.textInputRowStyle, {backgroundColor: props.inputBGColor}]}>
      <Icon name={props.icon} color="#a9a9a9" size={20} />
      <TextInput
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="#666666"
        autoCorrect={false}
        style={[styles.textInputStyle, {color: props.textColor}]}
        value={props.value}
        keyboardType={props.keyboard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputRowStyle: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
    alignSelf: 'center',
    width: '90%',
    borderColor: '#666',
    elevation: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  textInputStyle: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 16,
    fontSize: 18,
  },
});
export default CustomInput;
