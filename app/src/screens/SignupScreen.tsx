/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useRef, useState} from 'react';
import {
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import CustomInput from '../components/CustomTextInput';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../data/params';
import {HelperText} from 'react-native-paper';

interface SignupScreenProps {
  navigation: StackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList, 'SIGNUP'>;
}

const SignupScreen: React.FC<SignupScreenProps> = props => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [userId, setUserid] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigateToHome = () => {
    props.navigation.reset({
      index: 0,
      routes: [
        {
          name: 'HOME',
        },
      ],
    });
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 1,
      mediaType: 'photo',
    }).then(imageRes => {
      if (imageRes.data) {
        bottomSheetRef.current?.close();
      } else {
        ToastAndroid.show('Failed to pick image', ToastAndroid.SHORT);
      }
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      compressImageQuality: 1,
      includeBase64: true,
      mediaType: 'photo',
    }).then(image => {
      if (image.data) {
        bottomSheetRef.current?.close();
        setImage(image.path);
      } else {
        ToastAndroid.show('Failed to pick image!', ToastAndroid.SHORT);
      }
    });
  };

  return (
    <View style={styles.container}>
      <BottomSheet
        animationType="slide"
        closeOnPressMask
        closeOnDragDown
        closeOnPressBack
        keyboardAvoidingViewEnabled
        customStyles={{
          container: {
            flex: 1,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            elevation: 20,
          },
          wrapper: {backgroundColor: '#99999900'},
        }}
        ref={bottomSheetRef}>
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.bottomSheetTitle}>Upload Photo</Text>
            <Text style={styles.bottomSheetSubtitle}>
              Choose Your Profile Picture
            </Text>
          </View>
          <TouchableOpacity
            style={styles.bottomSheetButton}
            onPress={takePhotoFromCamera}>
            <Text style={styles.bottomSheetButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomSheetButton}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.bottomSheetButtonTitle}>
              Choose From Library
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomSheetButton}
            onPress={() => {
              bottomSheetRef.current?.close();
            }}>
            <Text style={styles.bottomSheetButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
      <Text style={{color: '#000', fontSize: 30, alignSelf: 'center'}}>
        User Details
      </Text>
      <View style={{alignItems: 'center'}}>
        <TouchableNativeFeedback
          onPress={() => {
            bottomSheetRef.current?.open();
          }}>
          <View style={styles.imageStyle}>
            <ImageBackground
              source={{
                uri: image,
              }}
              style={{height: 120, width: 120}}
              imageStyle={{borderRadius: 60}}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  name="camera"
                  size={35}
                  color="#a9a9a9"
                  style={styles.imageIconStyle}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.boxStyle}>
        <View style={styles.textBoxStyle}>
          <Text style={styles.inputHeaderTextStyle}>Name *</Text>
        </View>
        <CustomInput
          inputBGColor="#fff"
          placeholder=""
          textColor="#000"
          keyboard="default"
          icon="person"
          value={name}
          onChangeText={text => setName(text)}
        />
        {/* <HelperText type="error" visible={hasErrorsinPhone()}>
          Email address is invalid!
        </HelperText> */}
        <View style={styles.textBoxStyle}>
          <Text style={styles.inputHeaderTextStyle}>Phone *</Text>
        </View>
        <CustomInput
          inputBGColor="#fff"
          placeholder=""
          textColor="#000"
          keyboard="number-pad"
          icon="call"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
        />
        <View style={styles.textBoxStyle}>
          <Text style={styles.inputHeaderTextStyle}>User Id *</Text>
        </View>
        <CustomInput
          inputBGColor="#fff"
          placeholder=""
          textColor="#000"
          keyboard="default"
          icon="key"
          value={userId}
          onChangeText={text => setUserid(text)}
        />
        <View style={styles.textBoxStyle}>
          <Text style={styles.inputHeaderTextStyle}>Address *</Text>
        </View>
        <CustomInput
          inputBGColor="#fff"
          placeholder=""
          textColor="#000"
          keyboard="number-pad"
          icon="home-sharp"
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <Pressable onPress={navigateToHome} style={styles.btnContainer}>
          <Text style={styles.btnText}>{'NEXT >'}</Text>
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
  disabledButton: {
    opacity: 0.6,
  },
  inputHeaderTextStyle: {
    backgroundColor: '#fff',
    fontSize: 18,
  },
  loader: {
    marginHorizontal: 10,
  },
  btnContainer: {
    marginHorizontal: 30,

    padding: 15,
    borderRadius: 10,
    backgroundColor: '#64b5f6',
    alignItems: 'center',
    marginTop: 40,
  },

  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imageStyle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIconStyle: {
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
  textBoxStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  textInputRowStyle: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#666',
  },
  textInputStyle: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  boxStyle: {
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    elevation: 5,
    justifyContent: 'center',
    width: '90%',
    borderRadius: 20,

    backgroundColor: '#fff',
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#66BB6A',
    alignItems: 'center',
    margin: 20,
  },
  buttonTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bottomSheetHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  bottomSheetTitle: {
    fontSize: 27,
    height: 35,
  },
  bottomSheetSubtitle: {
    marginTop: 10,
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  bottomSheetButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#66bb6a',
    alignItems: 'center',
    marginVertical: 7,
  },
  bottomSheetButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SignupScreen;
