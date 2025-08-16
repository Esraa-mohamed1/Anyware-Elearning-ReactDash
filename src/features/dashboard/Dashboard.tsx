import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchAnnouncements } from '../announcements/announcementsSlice';
import { fetchQuizzes } from '../quizzes/quizzesSlice';
import Layout from '../../components/layout/Layout';
import ExamCard from '../../components/ui/ExamCard';
import AnnouncementsCard from '../../components/ui/AnnouncementsCard';
import QuizzesCard from '../../components/ui/QuizzesCard';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { announcements } = useSelector(
    (state: RootState) => state.announcements
  );
  const { quizzes } = useSelector(
    (state: RootState) => state.quizzes
  );

  useEffect(() => {
    dispatch(fetchAnnouncements());
    dispatch(fetchQuizzes());
  }, [dispatch]);

  return (
    <Layout activePath="/dashboard">
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 3 }}>
          {/* Left Column */}
          <Box sx={{ flex: { lg: 2 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Exam Card */}
              <Box>
                <ExamCard />
              </Box>
              
              {/* Announcements Card */}
              <Box>
                <AnnouncementsCard announcements={announcements} />
              </Box>
            </Box>
          </Box>
          
          {/* Right Column */}
          <Box sx={{ flex: { lg: 1 } }}>
            <QuizzesCard quizzes={quizzes} />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Dashboard;
