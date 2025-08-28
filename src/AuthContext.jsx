import { createContext, useState, useEffect, useContext } from 'react';
import newRequest from './utils/newRequest';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('currentUser');
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      console.error('Failed to parse currentUser from localStorage', e);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (credentials) => {
    // credentials: { username, password } OR { email, password }
    const res = await newRequest.post('/auth/login', credentials);
    const data = res.data;
    localStorage.setItem('currentUser', JSON.stringify(data));
    setUser(data);
    return data;
  };

  const logout = async () => {
    try {
      // If your backend supports cookie session logout
      await newRequest.post('/auth/logout').catch(() => {});
    } catch {}
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  const updateUser = (patch) => {
    setUser((prev) => {
      const next = { ...(prev || {}), ...(patch || {}) };
      localStorage.setItem('currentUser', JSON.stringify(next));
      return next;
    });
  };

  const value = { user, loading, login, logout, updateUser, isAuthenticated: !!user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
