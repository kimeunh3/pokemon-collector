import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
} from '@mui/material';
import { UserStateContext, DispatchContext } from '../../Context';
import LandingPageHeader from './components/LandingPageHeader';
import DrawerComponents from './components/DrawerComponents';
import ScrollUpButton from '../../components/commons/ScrollUpButton';

function LandingPage() {
  const navigate = useNavigate();
  const userState = useContext(UserStateContext);
  const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  const isLogin = !!userState.user;

  const [open, setOpen] = useState(false);

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
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <LandingPageHeader
        open={open}
        setOpen={setOpen}
        isLogin={isLogin}
        handleDialogOpen={handleDialogOpen}
        logout={logout}
      />
      <div
        style={{
          position: 'absolute',
          top: '380px',
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
            width='200px'
            height='200px'
          />
        </div>
      </div>
      <DrawerComponents
        open={open}
        setOpen={setOpen}
        isLogin={isLogin}
        handleDialogOpen={handleDialogOpen}
        logout={logout}
      />
      <ScrollUpButton />
      <div
        style={{
          position: 'relative',
          top: '200px',
          left: '10%',
        }}
      >
        <img
          alt=''
          src='https://d31z0g5vo6ghmg.cloudfront.net/front/poster.png'
          style={{ height: '500px' }}
        />
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

export default LandingPage;
