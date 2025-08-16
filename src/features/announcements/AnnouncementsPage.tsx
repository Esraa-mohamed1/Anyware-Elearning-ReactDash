import React, { useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Chip,
  styled,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchAnnouncements } from './announcementsSlice';
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

const AnnouncementsPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { announcements, loading } = useSelector(
    (state: RootState) => state.announcements
  );

  useEffect(() => {
    dispatch(fetchAnnouncements());
  }, [dispatch]);

  const handleViewDetails = (announcementId: string) => {
    console.log('Viewing announcement details:', announcementId);
  };

  if (loading) {
    return (
      <Layout>
        <StyledContainer maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <Typography variant="h6" sx={{ color: '#6b7280' }}>
              Loading announcements...
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
            Announcements
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#6b7280',
              mb: 3,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Stay updated with the latest news and important information
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <StyledChip
              label={`${announcements.length} Total`}
              color="primary"
              variant="outlined"
            />
            <StyledChip
              label="All Courses"
              color="secondary"
              variant="outlined"
            />
          </Box>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)' 
          }, 
          gap: 3 
        }}>
          {announcements.map((announcement) => (
            <Box key={announcement._id}>
              <ElegantCard
                title={announcement.title}
                subtitle={announcement.sender}
                description={announcement.content}
                type="announcement"
                sender={announcement.sender}
                course={announcement.course}
                content={announcement.content}
                onViewDetails={() => handleViewDetails(announcement._id)}
              />
            </Box>
          ))}
        </Box>

        {announcements.length === 0 && (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '40vh',
            textAlign: 'center'
          }}>
            <Typography variant="h5" sx={{ color: '#6b7280', mb: 2 }}>
              No announcements yet
            </Typography>
            <Typography variant="body1" sx={{ color: '#9ca3af' }}>
              Check back later for updates
            </Typography>
          </Box>
        )}
      </StyledContainer>
    </Layout>
  );
};

export default AnnouncementsPage;
