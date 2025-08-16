import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  console.log('RequireAuth - isAuthenticated:', isAuthenticated, 'loading:', loading);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    console.log('RequireAuth - Redirecting to login');
    return <Navigate to="/" replace />;
  }

  console.log('RequireAuth - Rendering children');
  return <>{children}</>;
};

export default RequireAuth;
