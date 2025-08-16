import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setUser, logout } from '../features/auth/authSlice';
import { User } from '../types';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    
    if (storedUser && token) {
      try {
        const userData: User = JSON.parse(storedUser);
        dispatch(setUser(userData));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        dispatch(logout());
      }
    }
  }, [dispatch]);

  const login = (userData: User) => {
    const token = 'dummy-token-' + Date.now(); // Simple token for demo
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    dispatch(setUser(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    user,
    isAuthenticated,
    loading,
    login,
    logout: logoutUser,
  };
};
