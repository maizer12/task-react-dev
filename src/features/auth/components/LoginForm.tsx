import { useAuth } from '../hooks/useAuth';
import { container } from '../../../core/di/container';
import { AuthService } from '../../../core/services/authService';
import Form from './Form';

export const LoginForm = () => {
  const authService = container.resolve(AuthService);
  const authState = useAuth();

  const handleLogin = async ({ username, password }: { username: string; password: string }) => {
    try {
      await authService.login(username, password);
    } catch (error) {
      console.error(error);
    }
  };

  return <Form title="Login" buttonText="Login" onSubmit={handleLogin} loading={authState.loading} />;
};

export default LoginForm;
