export interface UserDetails {
  _id: string;
  name: string;
  photo: string;
  phoneNum: any;
  address: string;
  identificationNumber: number;
  hashed: string;
}

export interface Donor {
  _id: string;
  blood: boolean;
  plasma: boolean;
  bloodDetails: string;
  plasmaDetails: string;
  userId: string;
  userDetails: UserDetails;
}

export interface DonorsRes {
  status: boolean;
  message: string;
  data: Donor[];
}
