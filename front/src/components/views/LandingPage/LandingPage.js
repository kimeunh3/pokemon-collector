import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { UserStateContext } from '../../Context';
import {
  Toolbar, AppBar, Button, Grid,
} from '@material-ui/core';
import './LandingPage.css';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar
        id="Header"
        position="static"
        style={{
          backgroundColor: '#D72A1F', boxShadow: '0 60px black, inset 0px 3px 4px 30px rgba(0, 0, 0, 0.05)', height: '450px', justifyContent: 'center', alignItems: 'center',
        }}
      >
        <Toolbar style={{ width: '100%' }}>
          <Grid container id="menu" style={{ marginBottom: '80px', textAlign: 'center' }}>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/')} style={{ fontSize: '30px' }}>포켓몬빵</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '30px' }}>퀴즈</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '30px' }}>도감</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '30px' }}>통계</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="inherit" onClick={() => navigate('/login')} style={{ fontSize: '30px' }}>마이페이지</Button>
            </Grid>
            <Grid item xs={2}>
              <Button color="primary" onClick={() => navigate('/login')} style={{ fontSize: '30px' }}>로그아웃</Button>
            </Grid>
          </Grid>
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
