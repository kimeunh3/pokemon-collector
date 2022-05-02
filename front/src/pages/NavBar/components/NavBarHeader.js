import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Toolbar,
  IconButton,
  styled,
  Button,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';

function NavBarHeader({ open, setOpen, isLogin, handleDialogOpen, logout }) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 900px)');

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

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
          onClick={() => navigate('/home')}
          style={{ marginRight: '40%' }}
        >
          <img
            alt=''
            src='https://d31z0g5vo6ghmg.cloudfront.net/front/logo.png'
            width='200px'
            height='70px'
          />
        </IconButton>
        {isLogin ? (
          <Grid
            container
            style={
              isMobile
                ? {
                    display: 'none',
                    textAlign: 'center',
                    alignItems: 'center',
                  }
                : {
                    textAlign: 'center',
                    alignItems: 'center',
                  }
            }
          >
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={() => navigate('/bread')}
                style={{ fontSize: '1.1vw' }}
              >
                포켓몬빵
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={() => navigate('/QuizPage')}
                style={{ fontSize: '1.1vw' }}
              >
                퀴즈
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={() => navigate('/IllustratedBook')}
                style={{ fontSize: '1.1vw' }}
              >
                도감
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={() => navigate('/StatisticsPage')}
                style={{ fontSize: '1.1vw' }}
              >
                통계
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={() => navigate('/MyPage')}
                style={{ fontSize: '1.1vw' }}
              >
                마이페이지
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='primary'
                onClick={logout}
                style={{ fontSize: '1.1vw' }}
              >
                로그아웃
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            style={
              isMobile
                ? {
                    display: 'none',
                    textAlign: 'center',
                    alignItems: 'center',
                  }
                : {
                    textAlign: 'center',
                    alignItems: 'center',
                  }
            }
          >
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={handleDialogOpen}
                style={{ fontSize: '1.1vw' }}
              >
                포켓몬빵
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={handleDialogOpen}
                style={{ fontSize: '1.1vw' }}
              >
                퀴즈
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={handleDialogOpen}
                style={{ fontSize: '1.1vw' }}
              >
                도감
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={handleDialogOpen}
                style={{ fontSize: '1.1vw' }}
              >
                통계
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='inherit'
                onClick={handleDialogOpen}
                style={{ fontSize: '1.1vw' }}
              >
                마이페이지
              </Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                color='primary'
                onClick={() => navigate('/login')}
                style={{ fontSize: '1.1vw' }}
              >
                로그인
              </Button>
            </Grid>
          </Grid>
        )}
        <IconButton
          color='info'
          aria-label='open drawer'
          edge='end'
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: 'none' }) }}
          style={
            isMobile
              ? {
                  marginRight: '5%',
                  marginLeft: 'auto',
                }
              : {
                  marginRight: '5%',
                  marginLeft: 'auto',
                  display: 'none',
                }
          }
        >
          <span className='material-symbols-outlined'>menu</span>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarHeader;
