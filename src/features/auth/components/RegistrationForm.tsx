import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { container } from '../../../core/di/container';
import { AuthService } from '../../../core/services/authService';
import Form from './Form';

export const RegistrationForm = () => {
  const authService = container.resolve(AuthService);
  const authState = useAuth();

  const handleRegister = async ({
    username,
    password,
    firstName,
    lastName,
  }: {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      //await authService.register({ username, password, firstName, lastName });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      title="Register"
      buttonText="Register"
      onSubmit={handleRegister}
      loading={authState.loading}
      isRegistration={true}
    />
  );
};

export default RegistrationForm;
