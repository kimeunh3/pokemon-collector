import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import StatisticsButton from './components/StatisticsButton';
import ScrollUpButton from '../../components/commons/ScrollUpButton';

function StatisticsPage() {
  const [isAll, setIsAll] = useState(true);
  const [isType, setIsType] = useState(true);
  const [isStats, setIsStats] = useState(true);

  return (
    <div style={{ paddingTop: '180px', paddingBottom: '50px' }}>
      <AppBar
        position='static'
        style={{
          backgroundColor: '#E5E5E5',
          color: 'black',
          width: '80vw',
          marginLeft: '10vw',
        }}
      >
        <Toolbar>
          <Grid
            container
            id='menu'
            style={{ textAlign: 'center', alignItems: 'center' }}
          >
            <Grid item xs={4}>
              <Button
                color='inherit'
                onClick={() => {
                  setIsAll(true);
                  setIsType(true);
                  setIsStats(true);
                }}
                style={{ fontSize: '1.5vw', fontWeight: 'bolder' }}
              >
                전체통계
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                color='inherit'
                onClick={() => {
                  setIsAll(false);
                  setIsType(true);
                  setIsStats(false);
                }}
                style={{ fontSize: '1.5vw', fontWeight: 'bolder' }}
              >
                속성통계
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                color='inherit'
                onClick={() => {
                  setIsAll(false);
                  setIsType(false);
                  setIsStats(true);
                }}
                style={{ fontSize: '1.5vw', fontWeight: 'bolder' }}
              >
                능력치통계
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr ',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: '4em 1em',
          margin: '50px 5vw 0 5vw',
        }}
      >
        {isAll && (
          <StatisticsButton
            imgSrc='pokemons/151'
            text='전체 개요'
            bColor='white'
          />
        )}
        {isType && (
          <>
            <StatisticsButton
              imgSrc='pokemons/19'
              text='노말 속성'
              bColor='rgba(198, 198, 167, 0.8)'
              kind='type'
              type='노말'
            />
            <StatisticsButton
              imgSrc='pokemons/4'
              text='불꽃 속성'
              bColor='rgba(245, 172, 120, 0.8)'
              kind='type'
              type='불꽃'
            />
            <StatisticsButton
              imgSrc='pokemons/7'
              text='물 속성'
              bColor='rgba(157, 183, 245, 0.8)'
              kind='type'
              type='물'
            />
            <StatisticsButton
              imgSrc='pokemons/1'
              text='풀 속성'
              bColor='rgba(167, 219, 141, 0.8)'
              kind='type'
              type='풀'
            />
            <StatisticsButton
              imgSrc='pokemons/25'
              text='전기 속성'
              bColor='rgba(250, 224, 120, 0.8)'
              kind='type'
              type='전기'
            />
            <StatisticsButton
              imgSrc='pokemons/124'
              text='얼음 속성'
              bColor='rgba(188, 230, 230, 0.8)'
              kind='type'
              type='얼음'
            />
            <StatisticsButton
              imgSrc='pokemons/66'
              text='격투 속성'
              bColor='rgba(214, 120, 115, 0.8)'
              kind='type'
              type='격투'
            />
            <StatisticsButton
              imgSrc='pokemons/109'
              text='독 속성'
              bColor='rgba(193, 131, 193, 0.8)'
              kind='type'
              type='독'
            />
            <StatisticsButton
              imgSrc='pokemons/50'
              text='땅 속성'
              bColor='rgba(235, 214, 157, 0.8)'
              kind='type'
              type='땅'
            />
            <StatisticsButton
              imgSrc='pokemons/16'
              text='비행 속성'
              bColor='rgba(198, 183, 245, 0.8)'
              kind='type'
              type='비행'
            />
            <StatisticsButton
              imgSrc='pokemons/63'
              text='에스퍼 속성'
              bColor='rgba(250, 146, 178, 0.8)'
              kind='type'
              type='에스퍼'
            />
            <StatisticsButton
              imgSrc='pokemons/10'
              text='벌레 속성'
              bColor='rgba(198, 209, 110, 0.8)'
              kind='type'
              type='벌레'
            />
            <StatisticsButton
              imgSrc='pokemons/74'
              text='바위 속성'
              bColor='rgba(209, 193, 125, 0.8)'
              kind='type'
              type='바위'
            />
            <StatisticsButton
              imgSrc='pokemons/92'
              text='고스트 속성'
              bColor='rgba(162, 146, 188, 0.8)'
              kind='type'
              type='고스트'
            />
            <StatisticsButton
              imgSrc='pokemons/147'
              text='드래곤 속성'
              bColor='rgba(162, 125, 250, 0.8)'
              kind='type'
              type='드래곤'
            />
            <StatisticsButton
              imgSrc='pokemons/81'
              text='강철 속성'
              bColor='rgba(209, 209, 224, 0.8)'
              kind='type'
              type='강철'
            />
            <StatisticsButton
              imgSrc='pokemons/35'
              text='페어리 속성'
              bColor='rgba(244, 189, 201, 0.8)'
              kind='type'
              type='페어리'
            />
          </>
        )}
        {isStats && (
          <>
            <StatisticsButton
              imgSrc='pokemons/149'
              text='공격력'
              bColor='rgba(240, 128, 48, 0.8)'
              stats='공격력'
            />
            <StatisticsButton
              imgSrc='pokemons/91'
              text='방어력'
              bColor='rgba(248, 208, 48, 0.8)'
              stats='방어력'
            />
            <StatisticsButton
              imgSrc='pokemons/113'
              text='Hp'
              bColor='rgba(255, 0, 0, 0.8)'
              stats='Hp'
            />
            <StatisticsButton
              imgSrc='pokemons/150'
              text='특수공격력'
              bColor='rgba(104, 144, 240, 0.8)'
              stats='특수공격력'
            />
            <StatisticsButton
              imgSrc='pokemons/144'
              text='특수방어력'
              bColor='rgba(120, 200, 80, 0.8)'
              stats='특수방어력'
            />
            <StatisticsButton
              imgSrc='pokemons/101'
              text='스피드'
              bColor='rgba(193, 131, 193, 0.8)'
              stats='스피드'
            />
            <StatisticsButton
              imgSrc='pokemons/95'
              text='키'
              bColor='rgba(161, 57, 89, 0.8)'
              stats='키'
            />
            <StatisticsButton
              imgSrc='pokemons/143'
              text='몸무게'
              bColor='rgba(68, 94, 156, 0.8)'
              stats='몸무게'
            />
            <StatisticsButton
              imgSrc='front/logo'
              text='종합점수'
              bColor='rgba(128, 128, 128, 0.8)'
              stats='종합점수'
            />
          </>
        )}
      </div>
      <ScrollUpButton />
    </div>
  );
}

export default StatisticsPage;
