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

function DrawerComponents({typeColor, isBarStats, isDoughnutType, isPolarAreaType, isBarWeightHeight, isBarTotal, isPieStatus, setIsBarStats, setIsDoughnutType, setIsPolarAreaType, setIsBarWeightHeight, setIsBarTotal, setIsPieStatus}) {
    const drawerWidth = 240;
    const theme = useTheme();
    const navigate = useNavigate();

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

    return (
      <Drawer
        variant="persistent"
        anchor="left"
        open="true"
        style={{ zIndex: '1200' }}
      >
        <DrawerHeader>
          <IconButton onClick={() => navigate('/StatisticsPage')}>
            {theme.direction === 'rtl' ? <span className="material-symbols-outlined">menu</span> : <span className="material-symbols-outlined">close</span>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem style={isBarStats ? { backgroundColor: typeColor } : {}}>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '18px' }}
              onClick={() => {
                setIsBarStats(true);
                setIsDoughnutType(false);
                setIsPolarAreaType(false);
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
                setIsPieStatus(false);
              }}  
            >능력치 통계</Button>
          </ListItem>
          <ListItem style={isDoughnutType ? { backgroundColor: typeColor } : {}}>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '18px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(true);
                setIsPolarAreaType(false);
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
                setIsPieStatus(false);
              }}  
            >속성 통계</Button>
          </ListItem>
          <ListItem style={isPolarAreaType ? { backgroundColor: typeColor } : {}}>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '18px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(false);
                setIsPolarAreaType(true);
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
                setIsPieStatus(false);
              }}
            >속성 개수 통계</Button>
          </ListItem>
          <ListItem style={isBarWeightHeight ? { backgroundColor: typeColor } : {}}>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '18px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(false);
                setIsPolarAreaType(false);
                setIsBarWeightHeight(true);
                setIsBarTotal(false);
                setIsPieStatus(false);
              }}
            >키/몸무게 통계</Button>
          </ListItem>
          <ListItem style={isBarTotal ? { backgroundColor: typeColor } : {}}>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '18px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(false);
                setIsPolarAreaType(false);
                setIsBarWeightHeight(false);
                setIsBarTotal(true);
                setIsPieStatus(false);
              }}
            >종합 능력치 통계</Button>
          </ListItem>
          <ListItem style={isPieStatus ? { backgroundColor: typeColor } : {}}>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '18px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(false);
                setIsPolarAreaType(false);
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
                setIsPieStatus(true);
              }}
            >포켓몬 종류 통계</Button>
          </ListItem>
        </List>
      </Drawer>
    )

}

export default DrawerComponents;