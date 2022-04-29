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

function StatsDrawerComponents({stats, statsColor, statsInfo, isBarStats, isBarTypeTop5, isBarTypeLow5, isBarTotal, setIsBarStats, setIsBarTypeTop5, setIsBarTypeLow5, setIsBarTotal }) {
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
                setIsBarTypeTop5(false);
                setIsBarTypeLow5(false);
                setIsBarTotal(false);
              }}  
            >속성별 통계</Button>
          </ListItem>
          <ListItem style={isBarTypeTop5 ? { backgroundColor: statsColor } : {}}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '12px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsBarTypeTop5(true);
                setIsBarTypeLow5(false);
                setIsBarTotal(false);
              }}  
            >속성 순위 (상위 30%)</Button>
          </ListItem>
          <ListItem style={isBarTypeLow5 ? { backgroundColor: statsColor } : {}}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '12px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsBarTypeTop5(false);
                setIsBarTypeLow5(true);
                setIsBarTotal(false);
              }}  
            >속성 순위 (하위 30%)</Button>
          </ListItem>
          <ListItem style={isBarTotal ? { backgroundColor: statsColor } : {}}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '12px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsBarTypeTop5(false);
                setIsBarTypeLow5(true);
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
                setIsBarTypeTop5(false);
                setIsBarTypeLow5(false);
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
              전체 포켓몬 평균: {statsInfo.statsMean}<br />
              속성 평균: {statsInfo.typesStatsMean}<br />
              최고 {stats} 속성: {statsInfo.statsMax}<br />
              최저 {stats} 속성: {statsInfo.statsMin}<br />
              최고 {stats} 포켓몬: {statsInfo.pokemonMax}<br />
              최저 {stats} 포켓몬: {statsInfo.pokemonMin}
            </Typography>
          </CardContent>
        </Card>
      </Drawer>
    )

}

export default StatsDrawerComponents;