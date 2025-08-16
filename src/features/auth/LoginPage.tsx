import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Paper,
  styled,
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';

const StyledPaper = styled(Paper)({
  padding: '48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  border: '1px solid #e5e7eb',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

const LoginPage: React.FC = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const mockUser = {
      id: '1',
      name: 'Talia',
      email: 'talia@example.com',
    };
    login(mockUser);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
        }}
      >
        <StyledPaper elevation={3}>
          <SchoolIcon
            sx={{
              fontSize: '64px',
              color: '#1e3a8a',
              mb: 3,
            }}
          />
          
          <Typography
            component="h1"
            variant="h3"
            sx={{
              color: '#1e3a8a',
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
            }}
          >
            Coligo
          </Typography>
          
          <Typography
            variant="h6"
            sx={{
              color: '#6b7280',
              mb: 4,
              textAlign: 'center',
            }}
          >
            Student Dashboard
          </Typography>
          
          <Typography
            variant="body1"
            sx={{
              color: '#374151',
              mb: 4,
              textAlign: 'center',
              maxWidth: '400px',
            }}
          >
            Welcome to your student dashboard. Access your courses, quizzes, and announcements all in one place.
          </Typography>
          
          <Button
            variant="contained"
            size="large"
            onClick={handleLogin}
            sx={{
              backgroundColor: '#1e3a8a',
              color: 'white',
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: '#1e40af',
              },
            }}
          >
            Login to Dashboard
          </Button>
          
          <Typography
            variant="caption"
            sx={{
              color: '#6b7280',
              mt: 3,
              textAlign: 'center',
            }}
          >
            No username or password required for demo
          </Typography>
        </StyledPaper>
      </Box>
    </Container>
  );
};

export default LoginPage;
