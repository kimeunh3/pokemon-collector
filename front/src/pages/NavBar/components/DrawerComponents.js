import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  styled,
  useTheme,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
} from '@material-ui/core';

function DrawerComponents({
  open,
  setOpen,
  isLogin,
  handleDialogOpen,
  logout,
}) {
  const navigate = useNavigate();
  const drawerWidth = 240;
  const theme = useTheme();

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
          {theme.direction === 'rtl' ? (
            <span className='material-symbols-outlined'>menu</span>
          ) : (
            <span className='material-symbols-outlined'>close</span>
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      {isLogin ? (
        <List>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={() => navigate('/bread')}
              style={{ fontSize: '18px' }}
            >
              포켓몬빵
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={() => navigate('/QuizPage')}
              style={{ fontSize: '18px' }}
            >
              퀴즈
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={() => navigate('/IllustratedBook')}
              style={{ fontSize: '18px' }}
            >
              도감
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={() => navigate('/StatisticsPage')}
              style={{ fontSize: '18px' }}
            >
              통계
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={() => navigate('/MyPage')}
              style={{ fontSize: '18px' }}
            >
              마이페이지
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='primary'
              onClick={logout}
              style={{ fontSize: '18px' }}
            >
              로그아웃
            </Button>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={handleDialogOpen}
              style={{ fontSize: '18px' }}
            >
              포켓몬빵
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={handleDialogOpen}
              style={{ fontSize: '18px' }}
            >
              퀴즈
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={handleDialogOpen}
              style={{ fontSize: '18px' }}
            >
              도감
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={handleDialogOpen}
              style={{ fontSize: '18px' }}
            >
              통계
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='inherit'
              onClick={handleDialogOpen}
              style={{ fontSize: '18px' }}
            >
              마이페이지
            </Button>
          </ListItem>
          <ListItem>
            <span className='material-symbols-outlined'>arrow_right</span>
            <Button
              color='primary'
              onClick={() => navigate('/login')}
              style={{ fontSize: '18px' }}
            >
              로그인
            </Button>
          </ListItem>
        </List>
      )}
    </Drawer>
  );
}

export default DrawerComponents;
