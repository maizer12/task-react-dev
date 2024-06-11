import { BehaviorSubject } from 'rxjs';
import { ReqUser, UserType } from '../../interfaces/shared.types.d';
import axios from '../../api/axios';

export interface AuthState {
  isAuthenticated: boolean;
  user: null | UserType;
  loading: boolean;
}

export class AuthService {
  private authState$ = new BehaviorSubject<AuthState>({ isAuthenticated: false, user: null, loading: false });

  async login(email: string, password: string) {
    try {
      this.authState$.next({ ...this.authState$.getValue(), loading: true });
      const { data } = await axios.post<ReqUser>('/auth/login', { email, password });
      this.authState$.next({ isAuthenticated: true, user: data.data, loading: false });
      localStorage.setItem('token', data.token);
    } catch (err) {
      console.log(err);
    }
  }

  logout() {
    if (localStorage.getItem('token')) localStorage.removeItem('token');
    this.authState$.next({ isAuthenticated: false, user: null, loading: false });
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
      this.authState$.next({ isAuthenticated: true, user: data.data, loading: false });
    } catch (err) {
      return err;
    }
  }
}
