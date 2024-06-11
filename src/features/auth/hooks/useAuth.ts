import { useState, useEffect } from 'react';
import { authStore, authState$ } from '../../../core/rx/authStore';

export const useAuth = () => {
	const [authState, setAuthState] = useState(authState$.getValue());

	useEffect(() => {
		const subscription = authStore.subscribe(setAuthState);
		return () => subscription.unsubscribe();
	}, []);

	return authState;
};
