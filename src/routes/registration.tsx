import { createFileRoute } from '@tanstack/react-router';
import { RegistrationPage } from '../features/auth/pages/RegistrationPage';

export const Route = createFileRoute('/registration')({
  component: RegistrationPage,
});
