import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Divider,
  styled,
} from '@mui/material';
import {
  Visibility as ViewIcon,
  Schedule as ScheduleIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  Quiz as QuizIcon,
} from '@mui/icons-material';

const StyledCard = styled(Card)({
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  border: '1px solid #e5e7eb',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 25px -5px rgba(0, 0, 0, 0.15)',
  },
});

const StyledChip = styled(Chip)({
  borderRadius: '12px',
  fontWeight: '500',
  fontSize: '0.75rem',
});

interface ElegantCardProps {
  title: string;
  subtitle: string;
  description: string;
  type: 'announcement' | 'quiz' | 'assignment';
  sender?: string;
  course: string;
  dueDate?: string;
  content?: string;
  topic?: string;
  onViewDetails: () => void;
}

const ElegantCard: React.FC<ElegantCardProps> = ({
  title,
  subtitle,
  description,
  type,
  sender,
  course,
  dueDate,
  content,
  topic,
  onViewDetails,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const getTypeIcon = () => {
    switch (type) {
      case 'quiz':
        return <QuizIcon sx={{ color: '#f59e0b' }} />;
      case 'assignment':
        return <AssignmentIcon sx={{ color: '#10b981' }} />;
      default:
        return <SchoolIcon sx={{ color: '#3b82f6' }} />;
    }
  };

  const getTypeColor = () => {
    switch (type) {
      case 'quiz':
        return '#f59e0b';
      case 'assignment':
        return '#10b981';
      default:
        return '#3b82f6';
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleCardClick = () => {
    setOpenDialog(true);
    onViewDetails();
  };

  return (
    <>
      <StyledCard onClick={handleCardClick}>
        <CardContent sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
            <Avatar
              sx={{
                bgcolor: getTypeColor(),
                width: 40,
                height: 40,
                mr: 2,
              }}
            >
              {getTypeIcon()}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#1f2937',
                  fontSize: '1rem',
                  mb: 0.5,
                  lineHeight: 1.3,
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#6b7280',
                  fontSize: '0.875rem',
                  mb: 1,
                }}
              >
                {subtitle}
              </Typography>
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: '#374151',
              fontSize: '0.875rem',
              mb: 2,
              lineHeight: 1.5,
            }}
          >
            {description}
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <StyledChip
              label={course}
              size="small"
              sx={{
                bgcolor: '#f3f4f6',
                color: '#374151',
              }}
            />
            <IconButton
              size="small"
              sx={{
                color: getTypeColor(),
                '&:hover': {
                  bgcolor: `${getTypeColor()}15`,
                },
              }}
            >
              <ViewIcon />
            </IconButton>
          </Box>

          {dueDate && (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.5 }}>
              <ScheduleIcon sx={{ fontSize: '1rem', color: '#ef4444', mr: 0.5 }} />
              <Typography
                variant="caption"
                sx={{
                  color: '#ef4444',
                  fontWeight: '500',
                  fontSize: '0.75rem',
                }}
              >
                Due {formatDate(dueDate)}
              </Typography>
            </Box>
          )}
        </CardContent>
      </StyledCard>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Avatar
              sx={{
                bgcolor: getTypeColor(),
                width: 48,
                height: 48,
                mr: 2,
              }}
            >
              {getTypeIcon()}
            </Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1f2937' }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#6b7280' }}>
                {subtitle}
              </Typography>
            </Box>
          </Box>
        </DialogTitle>

        <DialogContent sx={{ pt: 0 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.6 }}>
              {content || description}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: '500' }}>
                Course:
              </Typography>
              <Typography variant="body2" sx={{ color: '#374151' }}>
                {course}
              </Typography>
            </Box>

            {sender && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: '500' }}>
                  Sender:
                </Typography>
                <Typography variant="body2" sx={{ color: '#374151' }}>
                  {sender}
                </Typography>
              </Box>
            )}

            {topic && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: '500' }}>
                  Topic:
                </Typography>
                <Typography variant="body2" sx={{ color: '#374151' }}>
                  {topic}
                </Typography>
              </Box>
            )}

            {dueDate && (
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: '500' }}>
                  Due Date:
                </Typography>
                <Typography variant="body2" sx={{ color: '#ef4444', fontWeight: '500' }}>
                  {formatDate(dueDate)}
                </Typography>
              </Box>
            )}
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button
            onClick={() => setOpenDialog(false)}
            variant="outlined"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: '500',
            }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: getTypeColor(),
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: '500',
              '&:hover': {
                bgcolor: getTypeColor(),
                opacity: 0.9,
              },
            }}
          >
            {type === 'quiz' ? 'Start Quiz' : type === 'assignment' ? 'Solve Assignment' : 'View More'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ElegantCard;
