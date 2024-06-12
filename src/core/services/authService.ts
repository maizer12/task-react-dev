import { BehaviorSubject } from 'rxjs';
import { LoginParams, RegistrationParams, ReqUser, UserType } from '../../interfaces/shared.types.d';
import axios from '../../api/axios';
import { AxiosError } from 'axios';

export interface AuthState {
  error: null | string;
  user: null | UserType;
  loading: boolean;
}

export class AuthService {
  private authState$ = new BehaviorSubject<AuthState>({ error: null, user: null, loading: false });

  async login(value: LoginParams) {
    try {
      const { email, password } = value;
      this.authState$.next({ ...this.authState$.getValue(), error: null, loading: true });
      const { data } = await axios.post<ReqUser>('/auth/login', { email, password });
      this.authState$.next({ error: null, user: data.data, loading: false });
      localStorage.setItem('token', data.token);
    } catch (err) {
      if (err) {
        const axiosError = err as AxiosError<{ message: string }>;
        this.authState$.next({
          ...this.authState$.getValue(),
          error: axiosError.response?.data.message || 'Failed to login',
          loading: false,
        });
      }
      throw err;
    }
  }

  async registration(value: RegistrationParams) {
    try {
      const { email, fullName, password } = value;
      this.authState$.next({
        ...this.authState$.getValue(),
        error: null,
        loading: true,
      });
      const { data } = await axios.post<ReqUser>('/auth/register', { email, fullName, password });
      this.authState$.next({ error: null, user: data.data, loading: false });
      localStorage.setItem('token', data.token);
    } catch (err) {
      if (err) {
        const axiosError = err as AxiosError<{ message: string }>;
        this.authState$.next({
          ...this.authState$.getValue(),
          error: axiosError.response?.data.message || 'Failed to registration',
          loading: false,
        });
      }
      throw err;
    }
  }

  logout() {
    if (localStorage.getItem('token')) localStorage.removeItem('token');
    this.authState$.next({ error: null, user: null, loading: false });
  }

  get authState() {
    return this.authState$.asObservable();
  }

  getAuthStateValue() {
    return this.authState$.getValue();
  }

  async fetchUserData() {
    try {
      this.authState$.next({ ...this.authState$.getValue(), loading: true });
      const { data } = await axios('/auth/me');
      this.authState$.next({ error: null, user: data.data, loading: false });
    } catch (err) {
      return err;
    }
  }
}
