import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { UserStateContext } from '../../Context';
import {
  Toolbar, IconButton, styled, useTheme, Drawer, Button, Grid,
  List, Divider, ListItem,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  const drawerWidth = 240;

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

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        id="Header"
        position="static"
        open={open}
        style={{
          backgroundColor: '#D72A1F', boxShadow: '0 60px black, inset 0px 3px 4px 30px rgba(0, 0, 0, 0.05)', height: '450px', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <Toolbar style={{ width: '100vw' }}>
          <Grid container id="menu" style={{ marginBottom: '80px', textAlign: 'center' }}>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/bread')} style={{ fontSize: '2vw' }}>포켓몬빵</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>퀴즈</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>도감</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>통계</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>마이페이지</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="primary" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>로그아웃</Button>
            </Grid>
          </Grid>
          <IconButton
            id="Hamburger"
            color="info"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
            style={{
              marginRight: '5%', marginLeft: 'auto',
            }}
          >
            <span className="material-symbols-outlined">
              menu
            </span>
          </IconButton>
        </Toolbar>
        <img alt="" src={require('../images/logo.png')} width="600px" height="210px" />
      </AppBar>
      <div style={{
        position: 'absolute', top: '380px', width: '100%', zIndex: '9999',
      }}
      >
        <div style={{ left: '50%', marginLeft: '-100px', position: 'absolute' }}>
          <img alt="" src={require('../images/nav-icon.png')} width="200px" height="200px" />
        </div>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <span className="material-symbols-outlined">menu</span> : <span className="material-symbols-outlined">close</span>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button color="inherit" onClick={() => navigate('/bread')} style={{ fontSize: '18px' }}>포켓몬빵</Button>
          </ListItem>
          <ListItem>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>퀴즈</Button>
          </ListItem>
          <ListItem>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>도감</Button>
          </ListItem>
          <ListItem>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>통계</Button>
          </ListItem>
          <ListItem>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>마이페이지</Button>
          </ListItem>
          <ListItem>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button color="primary" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>로그아웃</Button>
          </ListItem>
        </List>
      </Drawer>
      <button type="button" id="go-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}><span className="material-symbols-outlined">arrow_upward</span></button>
      <div style={{
        position: 'relative', top: '200px', left: '10%',
      }}
      >
        <img alt="" src={require('../images/poster.png')} style={{ height: '500px' }} />
      </div>
    </div>
  );
}

export default LandingPage;
