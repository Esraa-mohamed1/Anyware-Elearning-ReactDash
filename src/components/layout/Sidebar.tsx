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
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Schedule as ScheduleIcon,
  Book as BookIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Announcement as AnnouncementIcon,
} from '@mui/icons-material';

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
  margin: '4px 8px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'white',
    color: '#1e3a8a',
    '& .MuiListItemIcon-root': {
      color: '#1e3a8a',
    },
  },
  '&.active': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
  { text: 'Announcement', icon: <AnnouncementIcon />, path: '/announcements' },
];

interface SidebarProps {
  activePath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePath }) => {
  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
          Coligo
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <StyledListItem
            key={item.text}
            className={activePath === item.path ? 'active' : ''}
          >
            <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
