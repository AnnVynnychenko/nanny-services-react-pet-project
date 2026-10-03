import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { authFirebase } from '../firebase/config';
import Loader from '../components/Loader';

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

  const logOut = () => signOut(authFirebase);

  const value = {
    user,
    isLoggedIn: !!user,
    loading,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? <Loader fullPage /> : children}
    </AuthContext.Provider>
  );
}
