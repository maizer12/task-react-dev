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
