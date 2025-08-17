import React from 'react';
import { Box, Typography, Card, CardContent, Button } from '@mui/material';
import Header from '../../components/layout/Header';
import homeImg from '../../assets/elaernn.png'; // استدعاء الصورة
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

 

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #f3f4f6 100%)',
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 800,
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            boxShadow: 4,
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          {/* الصورة */}
          <Box
            component="img"
            src={homeImg}
            alt="Home Illustration"
            sx={{
              width: { xs: '100%', md: '50%' },
              objectFit: 'cover',
            }}
          />

          {/* المحتوى */}
          <CardContent
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              p: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{ mb: 2, fontWeight: 'bold', color: 'primary.main' }}
            >
              Welcome to Cligo Home Page
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: 'text.secondary' }}>
              This is the central hub for your application. Log in to explore
              announcements and quizzes and view the dashboard.
            </Typography>
            
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default HomePage;
