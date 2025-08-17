import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  Button,
  InputBase,
} from '@mui/material';
import { Notifications, Mail, Search } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledToolbar = styled(Toolbar)(() => ({
  paddingLeft: '290px !important',
  paddingRight: '16px !important',
  minHeight: 64,
}));

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: 400,
  display: 'flex',
  alignItems: 'center',
  paddingLeft: theme.spacing(1),
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

const Header: React.FC = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ id: '1', name: 'Student', email: 'student@example.com' });
    navigate('/dashboard');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <StyledAppBar position="fixed">
      <StyledToolbar>
        {/* Welcome message */}
        <Typography variant="h6" component="div" sx={{ mr: 3 }}>
          Welcome {user?.name || 'Guest'},
        </Typography>

        {/* Search box */}
        <SearchBox>
          <Search />
          <StyledInput placeholder="Search…" />
        </SearchBox>

        <Box sx={{ flexGrow: 1 }} />

        {/* Login / Logout */}
        {!isAuthenticated ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLogin}
            sx={{ mr: 2 }}
          >
            Login
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleLogout}
            sx={{ mr: 2 }}
          >
            Logout
          </Button>
        )}

        {/* Icons when logged in */}
        {isAuthenticated && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <Avatar alt={user?.name || 'Student'} src="/static/images/avatar/1.jpg" />
          </Box>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
