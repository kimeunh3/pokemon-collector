import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import UserCard from './components/UserCard/UserCard';
import MyStickerList from './components/MyStickerList/MyStickerList';
import Achievements from './components/Achievements/Achievements';
import ScrollUpButton from '../../components/commons/ScrollUpButton';
import RankingButton from '../../components/commons/RankingButton';

import * as Api from '../../api';

function MyPage() {
  const [userState, setUserState] = useState(null);
  const [userPokemonList, setUserPokemonList] = useState(null);

  const fetchUserInfo = async () => {
    const res = await Api.get('user/current');
    setUserState(res.data);
    setUserPokemonList(res.data.stickers);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <Container fixed sx={{ marginTop: '165px', width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={4.5} md={4.5}>
          {userState && (
            <UserCard userState={userState} fetchUserInfo={fetchUserInfo} />
          )}
        </Grid>
        <Grid
          item
          xs={7.5}
          md={7.5}
          sx={{ backgroundColor: 'white', marginTop: '17px' }}
        >
          <Achievements />
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '30px' }}>
          <Typography variant='h4'>보유한 스티커</Typography>
          <hr />
        </Grid>
        {userPokemonList &&
          userPokemonList.map((pokemon) => (
            <Grid item xs={2} md={2} key={pokemon.id}>
              <MyStickerList
                id={pokemon.id}
                name={pokemon.name}
                count={pokemon.count}
              />
            </Grid>
          ))}
      </Grid>
      <ScrollUpButton />
      <RankingButton />
    </Container>
  );
}

export default MyPage;
