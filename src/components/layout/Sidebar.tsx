import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  styled,
  Button,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Schedule as ScheduleIcon,
  Book as BookIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Announcement as AnnouncementIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer)({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: '#1e3a8a',
    color: 'white',
  },
});

const StyledListItem = styled(ListItem)({
  margin: '6px 12px',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'white',
    color: '#1e3a8a',
    transform: 'translateX(4px)',
    '& .MuiListItemIcon-root': {
      color: '#1e3a8a',
    },
  },
  '&.active': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderLeft: '4px solid white',
  },
});

const StyledListItemIcon = styled(ListItemIcon)({
  color: 'white',
  minWidth: '40px',
});

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Schedule', icon: <ScheduleIcon />, path: '/schedule' },
  { text: 'Courses', icon: <BookIcon />, path: '/courses' },
  { text: 'Gradebook', icon: <SchoolIcon />, path: '/gradebook' },
  { text: 'Performance', icon: <TrendingUpIcon />, path: '/performance' },
  { text: 'Announcements', icon: <AnnouncementIcon />, path: '/announcements' },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activePath = location.pathname;
  const { i18n } = useTranslation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Change the language dynamically
  };

  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
            Coligo
          </Typography>
        </Box>
        <List>
          {menuItems.map((item) => (
            <StyledListItem
              key={item.text}
              onClick={() => handleNavigation(item.path)}
              className={activePath === item.path ? 'active' : ''}
            >
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
              <ListItemText primary={item.text} />
            </StyledListItem>
          ))}
        </List>
        <Box sx={{ mt: 'auto', p: 2, textAlign: 'center' }}>
          {/* Language Switcher Buttons */}
          
        </Box>
      </Box>
    </StyledDrawer>
  );
};

export default Sidebar;
