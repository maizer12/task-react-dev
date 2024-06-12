import { useNavigate } from '@tanstack/react-router';
import { useCallback } from 'react';

const useRedirect = () => {
  const navigate = useNavigate();

  const redirectTo = useCallback(
    (path: string) => {
      navigate({ to: path });
    },
    [navigate],
  );

  return redirectTo;
};

export default useRedirect;
