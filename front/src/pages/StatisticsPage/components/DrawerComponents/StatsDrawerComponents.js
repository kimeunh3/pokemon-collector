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

function StatsDrawerComponents({stats, statsColor, statsInfo, isBarStats, isDoughnutType, isBarWeightHeight, isBarTotal, setIsBarStats, setIsDoughnutType, setIsBarWeightHeight, setIsBarTotal }) {
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
        variant="persistent"
        anchor="left"
        open={open}
        style={{ zIndex: '1200' }}
      >
        <DrawerHeader>
          <IconButton onClick={() => navigate('/StatisticsPage')}>
            {theme.direction === 'rtl' ? <span className="material-symbols-outlined">menu</span> : <span className="material-symbols-outlined">close</span>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <span className="material-symbols-outlined">arrow_right</span>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{stats} 통계</div>
          </ListItem>
          <ListItem style={isBarStats ? { backgroundColor: statsColor } : {}}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '12px' }}
              onClick={() => {
                setIsBarStats(true);
                setIsDoughnutType(false);
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
              }}  
            >속성별 통계</Button>
          </ListItem>
          <ListItem style={isDoughnutType ? { backgroundColor: statsColor } : {}}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '12px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(true);
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
              }}  
            >속성 순위 (상하위 30%)</Button>
          </ListItem>
          <ListItem style={isBarWeightHeight ? { backgroundColor: statsColor } : {}}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '12px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(false);
                setIsBarWeightHeight(true);
                setIsBarTotal(false);
              }}
            >포켓몬 순위 (상위 10%)</Button>
          </ListItem>
          <ListItem style={isBarTotal ? { backgroundColor: statsColor } : {}}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '12px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(false);
                setIsBarWeightHeight(false);
                setIsBarTotal(true);
              }}
            >포켓몬 순위 (하위 10%)</Button>
          </ListItem>
        </List>
        <Card variant="outlined" style={{ width: '20vw', marginLeft: '2vw', marginTop: '5vh' }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {stats} 개요
            </Typography>
            <Typography variant="body2">
              전체 포켓몬 수: 151<br />
              전체 속성 수: 17<br />
              전체 포켓몬 {stats} 평균: {statsInfo.statsMean}<br />
              전체 속성 {stats} 평균: {statsInfo.defenseMean}<br />
              최고 {stats} 속성: {statsInfo.defenseMean}<br />
              최저 {stats} 속성 {statsInfo.hpMean}<br />
              최고 {stats} 포켓몬: {statsInfo.spAttackMean}<br />
              최저 {stats} 포켓몬: {statsInfo.spDefenseMean}
            </Typography>
          </CardContent>
        </Card>
      </Drawer>
    )

}

export default StatsDrawerComponents;