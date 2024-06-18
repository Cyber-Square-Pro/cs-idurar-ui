import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AutomationIcon from '@mui/icons-material/BuildCircle';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LaboratoryIcon from '@mui/icons-material/Science';
import ShortcutIcon from '@mui/icons-material/Keyboard';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PaletteIcon from '@mui/icons-material/Palette';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import usericon from '../../../assets/icons/usericon.jpeg';
import logo from '../../../assets/icons/cs-pro-logo.jpeg';
import { ListSubheader, Divider, Typography, Switch, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#E1F7F5',
  height: '65px',
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
}));

const Header: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const menuOpen = Boolean(menuAnchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <HeaderAppBar position="fixed">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', marginRight: '10px' }} />
        {isMobile ? (
          <>
            <IconButton sx={{ color: '#000000' }} onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={menuOpen}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: '20ch',
                },
              }}
            >
              <MenuItem onClick={() => { navigate('/notification'); handleMenuClose(); }}>
                <ListItemIcon>
                  <NotificationsIcon />
                </ListItemIcon>
                Notifications
              </MenuItem>
              <MenuItem onClick={() => { navigate('/invite'); handleMenuClose(); }}>
                <ListItemIcon>
                  <img src={usericon} width="20px" alt="Invite" />
                </ListItemIcon>
                Invite
              </MenuItem>
              <MenuItem onClick={() => { navigate('/settings'); handleMenuClose(); }}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={() => { navigate('/help'); handleMenuClose(); }}>
                <ListItemIcon>
                  <HelpIcon />
                </ListItemIcon>
                Help
              </MenuItem>
              <MenuItem onClick={() => { navigate('/search'); handleMenuClose(); }}>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                Search
              </MenuItem>
              <MenuItem onClick={() => { navigate('/profile'); handleProfileClose(); }}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={() => { navigate('/logout'); handleProfileClose(); }}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div style={{ display: 'flex', marginLeft: 'auto' }}>
            <IconButton sx={{ color: '#000000' }} onClick={() => navigate('/notification')}>
              <NotificationsIcon />
            </IconButton>
            <IconButton onClick={() => navigate('/invite')}>
              <img src={usericon} width="20px" alt="Invite" />
            </IconButton>
            <IconButton sx={{ color: '#000000' }} onClick={() => navigate('/settings')}>
              <SettingsIcon />
            </IconButton>
            <IconButton sx={{ color: '#000000' }} onClick={() => navigate('/help')}>
              <HelpIcon />
            </IconButton>
            <IconButton sx={{ color: '#000000' }} onClick={() => navigate('/search')}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: '#000000' }} onClick={handleProfileClick}>
              <PersonIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleProfileClose}
              PaperProps={{
                style: {
                  width: '50ch',  // Increased width
                },
              }}
            >
              <Grid container spacing={2} style={{ padding: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop:'20px' }}>
                  <img src={logo} alt="Logo" style={{ width: '50px', marginRight: '10px' , marginLeft: '20px'}} />
                  <Typography variant="h6">IDURAR CRM</Typography>
                </div>
                <br />
                <hr style={{ width: '100%' }} />
                <Grid item xs={6}>
               
                  <ListSubheader>Account</ListSubheader>
                  <MenuItem onClick={() => { navigate('/profile'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    My profile
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/email-settings'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    Email settings
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/import-data'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <DataUsageIcon />
                    </ListItemIcon>
                    Import data
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/automations'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <AutomationIcon />
                    </ListItemIcon>
                    Automations
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/developers'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <DeveloperModeIcon />
                    </ListItemIcon>
                    Developers
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/trash'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <DeleteIcon />
                    </ListItemIcon>
                    Trash
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/archive'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <ArchiveIcon />
                    </ListItemIcon>
                    Archive
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/administration'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <AdminPanelSettingsIcon />
                    </ListItemIcon>
                    Administration
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/teams'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <GroupIcon />
                    </ListItemIcon>
                    Teams
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/logout'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <PersonIcon />
                    </ListItemIcon>
                    Log out
                  </MenuItem>
                </Grid>
                <hr />
                <Grid item xs={6}>
                  <ListSubheader>Explore</ListSubheader>
                  <MenuItem onClick={() => { navigate('/app-marketplace'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <StoreIcon />
                    </ListItemIcon>
                    App marketplace
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/mobile-app'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <MobileFriendlyIcon />
                    </ListItemIcon>
                    Mobile app
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/monday-labs'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <LaboratoryIcon />
                    </ListItemIcon>
                    Labs
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/shortcuts'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <ShortcutIcon />
                    </ListItemIcon>
                    Shortcuts
                  </MenuItem>
                  <hr style={{marginTop: '10px', marginBottom: '10px'}} />
                  <MenuItem onClick={() => { navigate('/invite-members'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <GroupAddIcon />
                    </ListItemIcon>
                    Invite members
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/get-help'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <HelpOutlineIcon />
                    </ListItemIcon>
                    Get help
                  </MenuItem>
                  <MenuItem onClick={() => { navigate('/change-theme'); handleProfileClose(); }}>
                    <ListItemIcon>
                      <PaletteIcon />
                    </ListItemIcon>
                    Change theme
                  </MenuItem>
                  <Button
          variant="contained"
          onClick={() => { navigate('/upgrade'); handleProfileClose(); }}
          style={{ backgroundColor: 'green', color: 'white', marginTop: '10px', marginLeft: '20px' }}
          startIcon={<UpgradeIcon />}
        >
          Upgrade
        </Button>
                </Grid>
              </Grid>
              <Divider />
              <Box sx={{ px: 2, py: 1 }}>
                <Typography variant="subtitle1">Working status</Typography>
                <MenuItem>
                  <Switch edge="end" />
                  <Typography variant="body2" sx={{ ml: 1 }}>Do not disturb</Typography>
                </MenuItem>
              </Box>
            </Menu>
          </div>
        )}
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
