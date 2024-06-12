import { useAuth } from '../hooks/useAuth';
import { container } from '../../../core/di/container';
import { AuthService } from '../../../core/services/authService';
import Form from './Form';
import useRedirect from '../hooks/useRedirect';
import { LoginFormParams } from '../auth.types';

export const LoginForm = () => {
  const authService = container.resolve(AuthService);
  const authState = useAuth();
  const redirectTo = useRedirect();

  const handleLogin = async ({ email, password }: LoginFormParams) => {
    try {
      await authService.login({ email, password });
      redirectTo('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      title="Login"
      buttonText="Login"
      errorText={authState.error}
      onSubmit={handleLogin}
      loading={authState.loading}
    />
  );
};

export default LoginForm;
