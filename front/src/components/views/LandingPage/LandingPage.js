import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Toolbar, IconButton, styled, useTheme, Drawer, Button, Grid,
  List, Divider, ListItem,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import { DialogActions, DialogContent, Dialog, DialogTitle } from '@mui/material';
import './LandingPage.css';
import { UserStateContext, DispatchContext } from '../../Context';

function LandingPage() {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

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

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem('userToken');
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: 'LOGOUT' });
    // 기본 페이지로 돌아감.
    navigate('/home');
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  }
  const handleDialogClose = () => {
    setOpenDialog(false);
  }

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
          {isLogin ? (
            <Grid container id="menu" style={{ marginBottom: '80px', textAlign: 'center' }}>
              <Grid item xs={2}>
                <Button color="inherit" onClick={() => navigate('/bread')} style={{ fontSize: '2vw' }}>포켓몬빵</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>퀴즈</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={() => navigate('/IllustratedBook')} style={{ fontSize: '2vw' }}>도감</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>통계</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>마이페이지</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="primary" onClick={logout} style={{ fontSize: '2vw' }}>로그아웃</Button>
              </Grid>
            </Grid>
            ) : (
              <Grid container id="menu" style={{ marginBottom: '80px', textAlign: 'center' }}>
              <Grid item xs={2}>
                <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '2vw' }}>포켓몬빵</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '2vw' }}>퀴즈</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '2vw' }}>도감</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '2vw' }}>통계</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '2vw' }}>마이페이지</Button>
              </Grid>
              <Grid item xs={2}>
                <Button color="primary" onClick={() => navigate('/login')} style={{ fontSize: '2vw' }}>로그인</Button>
              </Grid>
            </Grid>
          )}
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
        {isLogin ? (
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
              <Button color="inherit" onClick={() => navigate('/IllustratedBook')} style={{ fontSize: '18px' }}>도감</Button>
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
              <Button color="primary" onClick={logout} style={{ fontSize: '18px' }}>로그아웃</Button>
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem>
              <span className="material-symbols-outlined">arrow_right</span>
              <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '18px' }}>포켓몬빵</Button>
            </ListItem>
            <ListItem>
              <span className="material-symbols-outlined">arrow_right</span>
              <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '18px' }}>퀴즈</Button>
            </ListItem>
            <ListItem>
              <span className="material-symbols-outlined">arrow_right</span>
              <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '18px' }}>도감</Button>
            </ListItem>
            <ListItem>
              <span className="material-symbols-outlined">arrow_right</span>
              <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '18px' }}>통계</Button>
            </ListItem>
            <ListItem>
              <span className="material-symbols-outlined">arrow_right</span>
              <Button color="inherit" onClick={handleDialogOpen} style={{ fontSize: '18px' }}>마이페이지</Button>
            </ListItem>
            <ListItem>
              <span className="material-symbols-outlined">arrow_right</span>
              <Button color="primary" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>로그인</Button>
            </ListItem>
          </List>
        )}
      </Drawer>
      <button type="button" id="go-top" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}><span className="material-symbols-outlined">arrow_upward</span></button>
      <div style={{
        position: 'relative', top: '200px', left: '10%',
      }}
      >
        <img alt="" src={require('../images/poster.png')} style={{ height: '500px' }} />
      </div>
      <Dialog open={openDialog} onClose={handleDialogClose} style={{ zIndex: '10000' }}>
        <DialogTitle>pokemon-collector</DialogTitle>
        <DialogContent>
          로그인 후 이용가능한 서비스입니다!
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="inherit" onClick={handleDialogClose}>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LandingPage;
