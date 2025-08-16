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
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f9fafb',
          minHeight: '100vh',
          marginLeft: 0, // Remove margin to align with the drawer
          padding: { xs: 2, md: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
