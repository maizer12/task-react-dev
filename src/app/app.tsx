import { createRouter, RouterProvider } from '@tanstack/react-router';
import { routeTree } from '../routeTree.gen';
import { useEffect, useCallback } from 'react';
import { AuthService } from '../core/services/authService';
import { container } from 'tsyringe';

const App = () => {
  const authService = container.resolve(AuthService);
  const router = createRouter({ routeTree });

  const getMe = useCallback(async () => {
    try {
      await authService.fetchUserData();
    } catch (error) {
      console.error('Failed to fetch user data', error);
    }
  }, [authService]);

  useEffect(() => {
    console.log('tt');
    if (localStorage.getItem('token')) getMe();
  }, [authService]);

  return <RouterProvider router={router} />;
};

export default App;
