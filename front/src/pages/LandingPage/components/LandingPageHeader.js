import React from 'react';
import { styled, Toolbar } from '@material-ui/core';
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

function LandingPageHeader({
  open,
  setOpen,
  isLogin,
  handleDialogOpen,
  logout,
}) {
  return (
    <AppBar
      id='Header'
      position='static'
      open={open}
      style={{
        backgroundColor: '#D72A1F',
        boxShadow: '0 60px black, inset 0px 3px 4px 30px rgba(0, 0, 0, 0.05)',
        height: '450px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Toolbar style={{ width: '80vw' }}>
        <HeaderMenu
          open={open}
          setOpen={setOpen}
          isLogin={isLogin}
          handleDialogOpen={handleDialogOpen}
          logout={logout}
          isLanding
        />
      </Toolbar>
      <img alt='' src={ImgSrc.logoImg} width='600px' height='210px' />
    </AppBar>
  );
}

export default LandingPageHeader;
