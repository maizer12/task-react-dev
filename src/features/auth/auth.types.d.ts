export interface RegistrationFormParams {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface LoginFormParams {
  email: string;
  password: string;
}
