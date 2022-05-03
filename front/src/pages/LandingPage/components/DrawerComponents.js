import React from 'react';
import {
  IconButton,
  styled,
  useTheme,
  Drawer,
  List,
  Divider,
} from '@material-ui/core';
import DrawerItem from './DrawerItem/DrawerItem';
import DrawerOnClickItem from './DrawerItem/DrawerOnClickItem';

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

  const handleDrawerClose = () => {
    setOpen(false);
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
      {isLogin ? (
        <List>
          <DrawerItem url='bread' text='포켓몬빵' />
          <DrawerItem url='quizPage' text='퀴즈' />
          <DrawerItem url='illustratedBook' text='도감' />
          <DrawerItem url='statisticsPage' text='통계' />
          <DrawerItem url='myPage' text='마이페이지' />
          <DrawerOnClickItem
            color='primary'
            handleOnClick={logout}
            text='로그아웃'
          />
        </List>
      ) : (
        <List>
          <DrawerOnClickItem handleOnClick={handleDialogOpen} text='포켓몬빵' />
          <DrawerOnClickItem handleOnClick={handleDialogOpen} text='퀴즈' />
          <DrawerOnClickItem handleOnClick={handleDialogOpen} text='도감' />
          <DrawerOnClickItem handleOnClick={handleDialogOpen} text='통계' />
          <DrawerOnClickItem
            handleOnClick={handleDialogOpen}
            text='마이페이지'
          />
          <DrawerItem color='primary' url='login' text='로그인' />
        </List>
      )}
    </Drawer>
  );
}

export default DrawerComponents;
