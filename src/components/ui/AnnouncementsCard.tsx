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
  Button,
  styled,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Announcement } from '../../types';

const StyledCard = styled(Card)({
  height: '100%',
  background: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '20px',
  boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.15), 0 6px 15px -3px rgba(0, 0, 0, 0.08)',
  },
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
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/announcements');
  };

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
          <Button
            onClick={handleViewAll}
            sx={{
              color: '#3b82f6',
              textTransform: 'none',
              fontWeight: '500',
              p: 0,
              minWidth: 'auto',
              '&:hover': {
                bgcolor: 'transparent',
                textDecoration: 'underline',
              },
            }}
          >
            View All
          </Button>
        </Box>

        <List sx={{ p: 0 }}>
          {announcements.slice(0, 4).map((announcement) => (
            <StyledListItem key={announcement._id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: '#1e3a8a',
                    width: 32,
                    height: 32,
                    fontSize: '0.875rem',
                  }}
                >
                  {announcement.sender.charAt(0)}
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
                      {announcement.content}
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
