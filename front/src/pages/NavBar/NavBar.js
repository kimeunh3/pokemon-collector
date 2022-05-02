import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
} from '@mui/material';
import { UserStateContext, DispatchContext } from '../../Context';
import NavBarHeader from './components/NavBarHeader';
import DrawerComponents from './components/DrawerComponents';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  const logout = () => {
    // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
    sessionStorage.removeItem('userToken');
    // dispatch 함수를 이용해 로그아웃함.
    dispatch({ type: 'LOGOUT' });
    // 기본 페이지로 돌아감.
    navigate('/home');
  };

  const [open, setOpen] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  // login page와 home에서는 NavBar가 뜨지 않도록 설정
  if (
    location.pathname === '/login' ||
    location.pathname === '/home' ||
    location.pathname.includes('/StatisticsPage/TypeStatisticsPage/') ||
    location.pathname.includes('/StatisticsPage/StatsStatisticsPage/')
  )
    return null;

  return (
    <div>
      <NavBarHeader
        open={open}
        setOpen={setOpen}
        isLogin={isLogin}
        handleDialogOpen={handleDialogOpen}
        logout={logout}
      />
      <DrawerComponents
        open={open}
        setOpen={setOpen}
        isLogin={isLogin}
        handleDialogOpen={handleDialogOpen}
        logout={logout}
      />
      <div
        style={{
          position: 'fixed',
          top: '54px',
          width: '100%',
          zIndex: '1100',
        }}
      >
        <div
          style={{
            left: '50vw',
            transform: 'translateX(-50%)',
            position: 'absolute',
          }}
        >
          <img
            alt=''
            src='https://d31z0g5vo6ghmg.cloudfront.net/front/nav-icon.png'
            width='110px'
            height='110px'
          />
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        style={{ zIndex: '1300' }}
      >
        <DialogTitle>pokemon-collector</DialogTitle>
        <DialogContent>로그인 후 이용가능한 서비스입니다!</DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='inherit'
            onClick={handleDialogClose}
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NavBar;
