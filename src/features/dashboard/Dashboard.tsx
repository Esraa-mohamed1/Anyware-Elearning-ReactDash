import React, { useEffect } from 'react';
import { Grid2 as Grid, Container } from '@mui/material';
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
        <Grid container spacing={3}>
          {/* Left Column */}
          <Grid item xs={12} lg={8}>
            <Grid container spacing={3}>
              {/* Exam Card */}
              <Grid item xs={12}>
                <ExamCard />
              </Grid>
              
              {/* Announcements Card */}
              <Grid item xs={12}>
                <AnnouncementsCard announcements={announcements} />
              </Grid>
            </Grid>
          </Grid>
          
          {/* Right Column */}
          <Grid item xs={12} lg={4}>
            <QuizzesCard quizzes={quizzes} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Dashboard;
