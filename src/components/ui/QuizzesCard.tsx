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
  Link,
  styled,
} from '@mui/material';
import {
  HourglassEmpty as HourglassIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';
import { Quiz } from '../../types';

const StyledCard = styled(Card)({
  height: '100%',
  background: 'white',
  border: '1px solid #e5e7eb',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
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
  const mockQuizzes = [
    {
      id: '1',
      title: 'Unit 2 quiz',
      course: 'Physics 02',
      topic: 'Unit2: Motion and forces',
      dueDate: '20 Dec 2017 - 09:00 PM',
      type: 'quiz',
    },
    {
      id: '2',
      title: '12-12 Assignment',
      course: 'Arabic K12',
      topic: 'الوحدة الثانية - الأفعال',
      dueDate: '20 Dec 2017 - 09:00 PM',
      type: 'assignment',
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
            What's due
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
          {mockQuizzes.map((quiz) => (
            <StyledListItem key={quiz.id}>
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
                      Due {quiz.dueDate}
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
