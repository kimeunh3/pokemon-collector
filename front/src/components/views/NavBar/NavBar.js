import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import { UserStateContext } from '../../Context';
import {
  AppBar, Toolbar, IconButton, Button, Grid,
} from '@material-ui/core';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // login page에서는 NavBar가 뜨지 않도록 설정
  if (location.pathname === '/login') return null;

  // const userState = useContext(UserStateContext);
  // const dispatch = useContext(DispatchContext);

  // 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
  // const isLogin = !!userState.user;

  // 로그아웃 클릭 시 실행되는 함수
  // const logout = () => {
  //   // sessionStorage 에 저장했던 JWT 토큰을 삭제함.
  //   sessionStorage.removeItem('userToken');
  //   // dispatch 함수를 이용해 로그아웃함.
  //   dispatch({ type: 'LOGOUT' });
  //   // 기본 페이지로 돌아감.
  //   navigate('/login');
  // };

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: '#D72A1F', boxShadow: '0 30px black' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/login')} style={{ marginRight: '40%' }}>
            <img alt="" src={require('./logo.png')} width="200px" height="70px" />
          </IconButton>
          <Grid container>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>포켓몬빵</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>퀴즈</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>도감</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>통계</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>마이페이지</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="primary" onClick={() => navigate('/login')} style={{ fontSize: '18px' }}>로그아웃</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div style={{
        position: 'fixed', top: '54px', width: '100%', zIndex: '9999',
      }}
      >
        <div style={{ left: '50%', marginLeft: '-55px', position: 'absolute' }}>
          <img alt="" src={require('./nav-icon.png')} width="110px" height="110px" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
