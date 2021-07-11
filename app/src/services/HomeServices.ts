import {DonorsRes} from './../models/DonorModel';
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
export const donateStuff = async (
  blood: boolean,
  plasma: boolean,
  bG: string,
  details: string,
) => {
  const token = await AsyncStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const bodyParameters = {
    blood: blood,
    plasma: plasma,
    bloodDetails: bG,
    plasmaDetails: details,
  };
  const res = await axios.post(
    'https://swastha-sevak-backend.herokuapp.com/api/donor/',
    bodyParameters,
    config,
  );
  console.log(res.data.data);

  return res.data.data;
};
export const getDonors = async () => {
  const token = await AsyncStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get<DonorsRes>(
    'https://swastha-sevak-backend.herokuapp.com/api/donor/',

    config,
  );
  console.log(res.data.data);

  return res.data.data;
};
