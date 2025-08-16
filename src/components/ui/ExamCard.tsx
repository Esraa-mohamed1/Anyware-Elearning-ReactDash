import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  styled,
} from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  border: '1px solid #e5e7eb',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

const ExamCard: React.FC = () => {
  return (
    <StyledCard>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                color: '#0d9488',
                fontWeight: 'bold',
                mb: 1,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              EXAMS TIME
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#374151',
                mb: 2,
                lineHeight: 1.6,
                fontSize: { xs: '0.875rem', md: '1rem' },
              }}
            >
              Here we are, Are you ready to fight? Don't worry, we prepared some tips to be ready for your exams.
            </Typography>
            
            <Typography
              variant="body2"
              sx={{
                color: '#6b7280',
                fontStyle: 'italic',
                mb: 3,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
              }}
            >
              "Nothing happens until something moves" - Albert Einstein
            </Typography>
            
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0d9488',
                color: 'white',
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 'bold',
                px: 3,
                py: 1,
                '&:hover': {
                  backgroundColor: '#0f766e',
                },
              }}
            >
              View exams tips
            </Button>
          </Box>
          
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'center',
              width: '120px',
              height: '120px',
              ml: 2,
            }}
          >
            <SchoolIcon
              sx={{
                fontSize: '80px',
                color: '#0d9488',
                opacity: 0.3,
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ExamCard;
