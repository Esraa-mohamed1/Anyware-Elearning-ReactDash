import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

const drawerWidth = 240;

interface LayoutProps {
  children: React.ReactNode;
  activePath: string;
}

const Layout: React.FC<LayoutProps> = ({ children, activePath }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar activePath={activePath} />
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f9fafb',
          minHeight: '100vh',
          marginLeft: `${drawerWidth}px`,
          marginTop: '64px',
          padding: 3,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
