import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Toolbar, IconButton, styled } from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import ImgSrc from '../../../core/constants/ImgSrc';
import HeaderMenu from '../../../components/LandingNavBar/HeaderMenu';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: '100%',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

function NavBarHeader({ open, setOpen, isLogin, handleDialogOpen, logout }) {
  const navigate = useNavigate();

  return (
    <AppBar
      position='fixed'
      open={open}
      style={{ backgroundColor: '#D72A1F', boxShadow: '0 30px black' }}
    >
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={() => navigate('/')}
          style={{ marginRight: '40%' }}
        >
          <img alt='' src={ImgSrc.logoImg} width='200px' height='70px' />
        </IconButton>
        <HeaderMenu
          open={open}
          setOpen={setOpen}
          isLogin={isLogin}
          handleDialogOpen={handleDialogOpen}
          logout={logout}
          fontSize='1.1vw'
        />
      </Toolbar>
    </AppBar>
  );
}

export default NavBarHeader;
