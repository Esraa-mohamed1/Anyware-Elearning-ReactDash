import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f9fafb',
          minHeight: '100vh',
          marginLeft: `${drawerWidth}px`,
          marginTop: '64px',
          padding: { xs: 2, md: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
