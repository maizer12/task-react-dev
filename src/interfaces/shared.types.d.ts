export interface UserType {
  _id: string;
  email: string;
  fullName: string;
  password: number | string;
}

export interface ReqUser {
  data: UserType;
  token: string;
}

export interface LoginParams {
  email: string;
  password: string;
}
export interface RegistrationParams {
  email: string;
  fullName: string;
  password: string;
}
