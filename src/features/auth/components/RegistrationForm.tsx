import { useAuth } from '../hooks/useAuth';
import { container } from '../../../core/di/container';
import { AuthService } from '../../../core/services/authService';
import Form from './Form';
import useRedirect from '../hooks/useRedirect';
import { RegistrationFormParams } from '../auth.types';

export const RegistrationForm = () => {
  const authService = container.resolve(AuthService);
  const authState = useAuth();
  const redirectTo = useRedirect();

  const handleRegister = async ({ email, password, firstName, lastName }: RegistrationFormParams) => {
    try {
      const fullName = `${firstName} ${lastName}`;

      await authService.registration({ email, password, fullName });
      redirectTo('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      title="Register"
      buttonText="Register"
      errorText={authState.error}
      onSubmit={handleRegister}
      loading={authState.loading}
      isRegistration={true}
    />
  );
};

export default RegistrationForm;
