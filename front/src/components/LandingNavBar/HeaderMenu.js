import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Button, Grid, useMediaQuery } from '@material-ui/core';

function HeaderMenu({
  open,
  setOpen,
  isLogin,
  handleDialogOpen,
  logout,
  fontSize = '1.5vw',
  isLanding = false,
}) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 900px)');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleClickBreadButton = () => {
    if (isLogin) {
      navigate('/bread');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickQuizButton = () => {
    if (isLogin) {
      navigate('/quizPage');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickIllustratedBookButton = () => {
    if (isLogin) {
      navigate('/illustratedBook');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickStatisticsButton = () => {
    if (isLogin) {
      navigate('/statisticsPage');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickMyPageButton = () => {
    if (isLogin) {
      navigate('/myPage');
    } else {
      handleDialogOpen();
    }
  };
  const handleClickLogInOutButton = () => {
    if (isLogin) {
      logout();
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Grid
        container
        style={{
          display: isMobile ? 'none' : 'flex',
          marginBottom: isLanding ? '80px' : 0,
          textAlign: 'center',
        }}
      >
        <Grid item xs={2}>
          <Button
            color='inherit'
            onClick={handleClickBreadButton}
            style={{ fontSize, minWidth: '90px' }}
          >
            포켓몬빵
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            color='inherit'
            onClick={handleClickQuizButton}
            style={{ fontSize, minWidth: '90px' }}
          >
            퀴즈
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            color='inherit'
            onClick={handleClickIllustratedBookButton}
            style={{ fontSize, minWidth: '90px' }}
          >
            도감
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            color='inherit'
            onClick={handleClickStatisticsButton}
            style={{ fontSize, minWidth: '90px' }}
          >
            통계
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            color='inherit'
            onClick={handleClickMyPageButton}
            style={{ fontSize, minWidth: '90px' }}
          >
            마이페이지
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            color='primary'
            onClick={handleClickLogInOutButton}
            style={{ fontSize, color: '#4682b4', minWidth: '90px' }}
          >
            {isLogin ? '로그아웃' : '로그인'}
          </Button>
        </Grid>
      </Grid>
      <IconButton
        color='inherit'
        aria-label='open drawer'
        edge='end'
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: 'none' }) }}
        style={{
          marginRight: '5%',
          marginLeft: 'auto',
          display: !isMobile ? 'none' : 'block',
          color: 'black',
        }}
      >
        <span className='material-symbols-outlined'>menu</span>
      </IconButton>
    </>
  );
}

export default HeaderMenu;
