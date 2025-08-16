import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
  styled,
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Mail as MailIcon,
} from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)({
  width: `calc(100% - ${drawerWidth}px)`,
  marginLeft: drawerWidth,
  backgroundColor: 'white',
  color: '#374151',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f3f4f6',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#6b7280',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 3 }}>
          Welcome {user?.name || 'Student'},
        </Typography>
        
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        
        <Box sx={{ flexGrow: 1 }} />
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Badge badgeContent={1} color="error">
            <NotificationsIcon sx={{ color: '#6b7280', cursor: 'pointer' }} />
          </Badge>
          
          <Badge badgeContent={3} color="error">
            <MailIcon sx={{ color: '#6b7280', cursor: 'pointer' }} />
          </Badge>
          
          <Avatar
            sx={{ 
              width: 40, 
              height: 40, 
              bgcolor: '#1e3a8a',
              cursor: 'pointer'
            }}
          >
            {user?.name?.charAt(0) || 'S'}
          </Avatar>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
