import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Chip,
  styled,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchQuizzes } from './quizzesSlice';
import Layout from '../../components/layout/Layout';
import ElegantCard from '../../components/ui/ElegantCard';

const StyledContainer = styled(Container)({
  paddingTop: '2rem',
  paddingBottom: '2rem',
});

const StyledChip = styled(Chip)({
  borderRadius: '20px',
  fontWeight: '500',
  fontSize: '0.875rem',
});

const QuizzesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { quizzes, loading } = useSelector(
    (state: RootState) => state.quizzes
  );

  useEffect(() => {
    dispatch(fetchQuizzes());
  }, [dispatch]);

  const handleViewDetails = (quizId: string) => {
    console.log('Viewing quiz details:', quizId);
  };

  const quizzesCount = quizzes.length;
  const assignmentsCount = quizzes.filter(q => q.type === 'assignment').length;
  const quizzesCountOnly = quizzes.filter(q => q.type === 'quiz').length;

  if (loading) {
    return (
      <Layout>
        <StyledContainer maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <Typography variant="h6" sx={{ color: '#6b7280' }}>
              Loading quizzes and assignments...
            </Typography>
          </Box>
        </StyledContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <StyledContainer maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#1f2937',
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Quizzes & Assignments
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6b7280',
              mb: 3,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Manage your upcoming quizzes and assignments
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <StyledChip
              label={`${quizzesCount} Total`}
              color="primary"
              variant="outlined"
            />
            <StyledChip
              label={`${quizzesCountOnly} Quizzes`}
              sx={{ bgcolor: '#fef3c7', color: '#d97706' }}
            />
            <StyledChip
              label={`${assignmentsCount} Assignments`}
              sx={{ bgcolor: '#d1fae5', color: '#059669' }}
            />
          </Box>
        </Box>

        <Grid container spacing={3}>
          {quizzes.map((quiz) => (
            <Grid item xs={12} sm={6} lg={4} key={quiz._id}>
              <ElegantCard
                title={quiz.title}
                subtitle={quiz.course}
                description={quiz.description || `Complete your ${quiz.type} for ${quiz.course}`}
                type={quiz.type}
                course={quiz.course}
                dueDate={quiz.dueDate}
                topic={quiz.topic}
                content={quiz.description}
                onViewDetails={() => handleViewDetails(quiz._id)}
              />
            </Grid>
          ))}
        </Grid>

        {quizzes.length === 0 && (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '40vh',
            textAlign: 'center'
          }}>
            <Typography variant="h5" sx={{ color: '#6b7280', mb: 2 }}>
              No quizzes or assignments yet
            </Typography>
            <Typography variant="body1" sx={{ color: '#9ca3af' }}>
              You're all caught up! Check back later for new items.
            </Typography>
          </Box>
        )}
      </StyledContainer>
    </Layout>
  );
};

export default QuizzesPage;
