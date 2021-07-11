export interface Hospital {
  _id: string;
  name: string;
  phoneNum: number;
  email: string;
  address: string;
  hashed: string;
  status: string;
}

export interface HosResponse {
  status: boolean;
  message: string;
  data: Hospital[];
}
