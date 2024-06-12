import { AuthService } from '../services/authService';
import { container } from '../di/container';
import { AuthState } from '../services/authService';
import { BehaviorSubject } from 'rxjs';

const authService = container.resolve(AuthService);

export const authStore = authService.authState;

export const authState$ = authService['authState$'] as BehaviorSubject<AuthState>;
