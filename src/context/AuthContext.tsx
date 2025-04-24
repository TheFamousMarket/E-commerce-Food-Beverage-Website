import React, { useEffect, useState, createContext, useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut, Auth as FirebaseAuth } from 'firebase/auth';
import { app } from '../firebase';
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signInWithFacebook: () => Promise<void>;
  logout: () => Promise<void>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [auth, setAuth] = useState<FirebaseAuth | null>(null);
  useEffect(() => {
    try {
      const auth = getAuth(app);
      setAuth(auth);
      const unsubscribe = onAuthStateChanged(auth, user => {
        if (user) {
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
          });
        } else {
          setUser(null);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (error) {
      setError('Failed to initialize authentication');
      setLoading(false);
    }
  }, []);
  const signInWithGoogle = async () => {
    if (!auth) {
      setError('Authentication not initialized');
      return;
    }
    try {
      setError(null);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError('Failed to sign in with Google');
      console.error('Google sign in error:', error);
    }
  };
  const signInWithFacebook = async () => {
    if (!auth) {
      setError('Authentication not initialized');
      return;
    }
    try {
      setError(null);
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError('Failed to sign in with Facebook');
      console.error('Facebook sign in error:', error);
    }
  };
  const logout = async () => {
    if (!auth) {
      setError('Authentication not initialized');
      return;
    }
    try {
      setError(null);
      await signOut(auth);
    } catch (error) {
      setError('Failed to log out');
      console.error('Logout error:', error);
    }
  };
  const value = {
    user,
    loading,
    error,
    signInWithGoogle,
    signInWithFacebook,
    logout
  };
  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>;
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};