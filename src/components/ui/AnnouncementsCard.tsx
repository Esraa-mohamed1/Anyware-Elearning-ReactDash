import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
  Link,
  styled,
} from '@mui/material';
import { Announcement } from '../../types';

const StyledCard = styled(Card)({
  height: '100%',
  background: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

const StyledListItem = styled(ListItem)({
  padding: '12px 0',
  borderBottom: '1px solid #f3f4f6',
  '&:last-child': {
    borderBottom: 'none',
  },
});

interface AnnouncementsCardProps {
  announcements: Announcement[];
}

const AnnouncementsCard: React.FC<AnnouncementsCardProps> = ({ announcements }) => {
  const mockAnnouncements = [
    {
      id: '1',
      sender: 'Mr. Ahmed Mostafa',
      course: 'Math 101',
      message: 'Exams and grades will be published tomorrow 😊',
      avatar: 'A',
    },
    {
      id: '2',
      sender: 'Mrs. Salma Ahmed',
      course: 'Physics 02',
      message: 'There will be a quiz next week',
      avatar: 'S',
    },
    {
      id: '3',
      sender: 'School management',
      course: 'Management',
      message: 'Morning call for all students 🌅',
      avatar: 'S',
    },
    {
      id: '4',
      sender: 'Events Manager',
      course: 'Events',
      message: 'Upcoming trip announcement',
      avatar: 'E',
    },
  ];

  return (
    <StyledCard>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: '#374151',
              fontWeight: 'bold',
            }}
          >
            Announcements
          </Typography>
          <Link
            href="#"
            sx={{
              color: '#3b82f6',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            All
          </Link>
        </Box>

        <List sx={{ p: 0 }}>
          {mockAnnouncements.map((announcement) => (
            <StyledListItem key={announcement.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: '#1e3a8a',
                    width: 32,
                    height: 32,
                    fontSize: '0.875rem',
                  }}
                >
                  {announcement.avatar}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: '500',
                      color: '#374151',
                      fontSize: '0.875rem',
                    }}
                  >
                    {announcement.sender}
                  </Typography>
                }
                secondary={
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#6b7280',
                        fontSize: '0.75rem',
                      }}
                    >
                      {announcement.course}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#374151',
                        mt: 0.5,
                        fontSize: '0.875rem',
                      }}
                    >
                      {announcement.message}
                    </Typography>
                  </Box>
                }
              />
            </StyledListItem>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
};

export default AnnouncementsCard;
