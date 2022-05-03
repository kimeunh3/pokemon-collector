import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  styled,
  useTheme,
  Drawer,
  List,
  Divider,
} from '@material-ui/core';
import DrawerItems from './DrawerItem/DrawerItems';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  },
}));

function DrawerComponents({
  open,
  setOpen,
  isLogin,
  handleDialogOpen,
  logout,
}) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setOpen(false);
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
    <Drawer
      variant='persistent'
      anchor='right'
      open={open}
      style={{ zIndex: '1200' }}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <span className='material-symbols-outlined'>
            {theme.direction === 'rtl' ? 'menu' : 'close'}
          </span>
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <DrawerItems handleOnClick={handleClickBreadButton} text='포켓몬빵' />
        <DrawerItems handleOnClick={handleClickQuizButton} text='퀴즈' />
        <DrawerItems
          handleOnClick={handleClickIllustratedBookButton}
          text='도감'
        />
        <DrawerItems handleOnClick={handleClickStatisticsButton} text='통계' />
        <DrawerItems
          handleOnClick={handleClickMyPageButton}
          text='마이페이지'
        />
        <DrawerItems
          color='primary'
          handleOnClick={handleClickLogInOutButton}
          text={isLogin ? '로그아웃' : '로그인'}
        />
      </List>
    </Drawer>
  );
}

export default DrawerComponents;
