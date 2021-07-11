import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {UserDataResponse} from '../models/LoginModel';

export const loginUser = async (
  phone: number,
  password: string,
  userType: string,
) => {
  console.log(phone, password, userType);
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  const bodyParameters = {
    phoneNum: phone,
    password: password,
    userType: userType,
  };
  const res = await axios.post(
    'https://swastha-sevak-backend.herokuapp.com/api/user/login',
    bodyParameters,
  );
  console.log(res.data);

  return res.data;
};
export const getUserDetails = async () => {
  const token = await AsyncStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // const bodyParameters = {
  //   phoneNum: phone,
  //   password: password,
  //   userType: userType,
  // };
  const res = await axios.get<UserDataResponse>(
    'https://swastha-sevak-backend.herokuapp.com/api/user/',
    config,
  );
  console.log(res.data.data.name);

  return res.data.data;
};
