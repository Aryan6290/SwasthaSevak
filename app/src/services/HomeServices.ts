import {HosResponse} from './../models/HospitalModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getHospitals = async () => {
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
  const res = await axios.get<HosResponse>(
    'https://swastha-sevak-backend.herokuapp.com/api/hospital/?status=approved',
    config,
  );
  console.log(res.data.data);

  return res.data.data;
};
export const getSellers = async () => {
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
  const res = await axios.get<HosResponse>(
    'https://swastha-sevak-backend.herokuapp.com/api/distributor/?status=approved',
    config,
  );
  console.log(res.data.data);

  return res.data.data;
};
