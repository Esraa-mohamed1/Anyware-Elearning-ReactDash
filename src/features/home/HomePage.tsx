import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../../components/layout/Header';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f3f4f6 100%)',
          padding: '16px',
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Welcome to the Home Page
        </Typography>
        <Typography variant="body1">
          This is the central hub for your application.
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
