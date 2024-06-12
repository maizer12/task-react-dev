import { useAuth } from '../hooks/useAuth';
import { container } from '../../../core/di/container';
import { AuthService } from '../../../core/services/authService';
import Form from './Form';
import useRedirect from '../hooks/useRedirect';

export const LoginForm = () => {
  const authService = container.resolve(AuthService);
  const authState = useAuth();
  const redirectTo = useRedirect();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      await authService.login(email, password);
      redirectTo('/');
    } catch (error) {
      console.error(error);
    }
  };

  return <Form title="Login" buttonText="Login" onSubmit={handleLogin} loading={authState.loading} />;
};

export default LoginForm;
