import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  styled,
} from '@mui/material';
import {
  HourglassEmpty as HourglassIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Quiz } from '../../types';

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
  padding: '16px 0',
  borderBottom: '1px solid #f3f4f6',
  '&:last-child': {
    borderBottom: 'none',
  },
});

const StyledButton = styled(Button)({
  borderColor: '#3b82f6',
  color: '#3b82f6',
  textTransform: 'none',
  fontWeight: '500',
  borderRadius: '8px',
  padding: '6px 16px',
  fontSize: '0.875rem',
  '&:hover': {
    borderColor: '#2563eb',
    backgroundColor: 'rgba(59, 130, 246, 0.04)',
  },
});

interface QuizzesCardProps {
  quizzes: Quiz[];
}

const QuizzesCard: React.FC<QuizzesCardProps> = ({ quizzes }) => {
  const navigate = useNavigate();

  const formatDueDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleViewAll = () => {
    navigate('/quizzes');
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
            What's due
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

        <Typography
          variant="body2"
          sx={{
            color: '#6b7280',
            mb: 3,
            fontSize: '0.875rem',
          }}
        >
          Sometimes 'LATER' becomes 'NEVER' so follow
        </Typography>

        <List sx={{ p: 0 }}>
          {quizzes.slice(0, 3).map((quiz) => (
            <StyledListItem key={quiz._id}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                {quiz.type === 'quiz' ? (
                  <HourglassIcon sx={{ color: '#f59e0b' }} />
                ) : (
                  <AssignmentIcon sx={{ color: '#10b981' }} />
                )}
              </ListItemIcon>
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
                    {quiz.title}
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
                      {quiz.course}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#374151',
                        mt: 0.5,
                        fontSize: '0.875rem',
                      }}
                    >
                      {quiz.topic}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#ef4444',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                      }}
                    >
                      Due {formatDueDate(quiz.dueDate)}
                    </Typography>
                  </Box>
                }
              />
              <StyledButton variant="outlined" size="small">
                {quiz.type === 'quiz' ? 'Start Quiz' : 'Solve Assignment'}
              </StyledButton>
            </StyledListItem>
          ))}
        </List>
      </CardContent>
    </StyledCard>
  );
};

export default QuizzesCard;
