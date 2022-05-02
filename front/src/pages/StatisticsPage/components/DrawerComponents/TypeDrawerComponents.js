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
  Typography,
} from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconObj from '../../../../core/Icon';

function TypeDrawerComponents({
  type,
  typeColor,
  pokemonInfo,
  isBarStats,
  isDoughnutType,
  isBarWeightHeight,
  isBarTotal,
  setIsBarStats,
  setIsDoughnutType,
  setIsBarWeightHeight,
  setIsBarTotal,
}) {
  const drawerWidth = '24vw';
  const theme = useTheme();
  const navigate = useNavigate();
  const open = true;

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    width: drawerWidth,
  }));

  return (
    <Drawer
      variant='persistent'
      anchor='left'
      open={open}
      style={{ zIndex: '1200' }}
    >
      <DrawerHeader>
        <IconButton onClick={() => navigate('/StatisticsPage')}>
          {theme.direction === 'rtl' ? (
            <span className='material-symbols-outlined'>menu</span>
          ) : (
            <span className='material-symbols-outlined'>close</span>
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem>
          {IconObj[type].Icon}
          <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
            &nbsp;{type} 속성 통계
          </div>
        </ListItem>
        <ListItem style={isBarStats ? { backgroundColor: typeColor } : {}}>
          <span
            className='material-symbols-outlined'
            style={{ fontSize: '18px' }}
          >
            arrow_right
          </span>
          <Button
            color='inherit'
            style={{ fontSize: '12px' }}
            onClick={() => {
              setIsBarStats(true);
              setIsDoughnutType(false);
              setIsBarWeightHeight(false);
              setIsBarTotal(false);
            }}
          >
            능력치 통계
          </Button>
        </ListItem>
        <ListItem style={isDoughnutType ? { backgroundColor: typeColor } : {}}>
          <span
            className='material-symbols-outlined'
            style={{ fontSize: '18px' }}
          >
            arrow_right
          </span>
          <Button
            color='inherit'
            style={{ fontSize: '12px' }}
            onClick={() => {
              setIsBarStats(false);
              setIsDoughnutType(true);
              setIsBarWeightHeight(false);
              setIsBarTotal(false);
            }}
          >
            속성 통계
          </Button>
        </ListItem>
        <ListItem
          style={isBarWeightHeight ? { backgroundColor: typeColor } : {}}
        >
          <span
            className='material-symbols-outlined'
            style={{ fontSize: '18px' }}
          >
            arrow_right
          </span>
          <Button
            color='inherit'
            style={{ fontSize: '12px' }}
            onClick={() => {
              setIsBarStats(false);
              setIsDoughnutType(false);
              setIsBarWeightHeight(true);
              setIsBarTotal(false);
            }}
          >
            키/몸무게 통계
          </Button>
        </ListItem>
        <ListItem style={isBarTotal ? { backgroundColor: typeColor } : {}}>
          <span
            className='material-symbols-outlined'
            style={{ fontSize: '18px' }}
          >
            arrow_right
          </span>
          <Button
            color='inherit'
            style={{ fontSize: '12px' }}
            onClick={() => {
              setIsBarStats(false);
              setIsDoughnutType(false);
              setIsBarWeightHeight(false);
              setIsBarTotal(true);
            }}
          >
            종합 능력치 통계
          </Button>
        </ListItem>
      </List>
      <Card
        variant='outlined'
        style={{ width: '20vw', marginLeft: '2vw', marginTop: '5vh' }}
      >
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {type} 속성 개요
          </Typography>
          <Typography variant='body2'>
            {type} 포켓몬 수: {pokemonInfo.pokemonCnt}
            <br />
            공격력 평균: {pokemonInfo.attackMean}
            <br />
            방어력 평균: {pokemonInfo.defenseMean}
            <br />
            Hp 평균: {pokemonInfo.hpMean}
            <br />
            특수공격력 평균: {pokemonInfo.spAttackMean}
            <br />
            특수방어력 평균: {pokemonInfo.spDefenseMean}
            <br />
            스피드 평균: {pokemonInfo.speedMean}
            <br />키 평균: {pokemonInfo.heightMean} (m)
            <br />
            몸무게 평균: {pokemonInfo.weightMean} (kg)
            <br />
            종합 점수 평균: {pokemonInfo.totalPointsMean}
          </Typography>
        </CardContent>
      </Card>
    </Drawer>
  );
}

export default TypeDrawerComponents;
