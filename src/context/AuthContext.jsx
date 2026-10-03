import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { authFirebase } from '../firebase/config';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = useCallback(async () => {
    try {
      await signOut(authFirebase);
    } catch (err) {
      console.error('Logout failed', err);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      loading,
      logOut,
    }),
    [user, loading, logOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
