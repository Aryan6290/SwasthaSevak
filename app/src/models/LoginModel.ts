export interface LoginResponse {
  status: boolean;
  message: string;
  data: string;
}
export interface UserData {
  _id: string;
  name: string;
  photo: string;
  phoneNum: number;
  address: string;
  identificationNumber: number;
  hashed: string;
  iat: number;
}

export interface UserDataResponse {
  status: boolean;
  message: string;
  data: UserData;
}
