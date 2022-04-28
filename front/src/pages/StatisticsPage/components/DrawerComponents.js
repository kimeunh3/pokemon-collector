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

function DrawerComponents({typeColor, isBarStats, isDoughnutType, isBarWeightHeight, isBarTotal, setIsBarStats, setIsDoughnutType, setIsBarWeightHeight, setIsBarTotal }) {
    const drawerWidth = 300;
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
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
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
                setIsBarWeightHeight(false);
                setIsBarTotal(false);
              }}  
            >속성 통계</Button>
          </ListItem>
          <ListItem style={isBarWeightHeight ? { backgroundColor: typeColor } : {}}>
            <span className="material-symbols-outlined">arrow_right</span>
            <Button
              color="inherit"
              style={{ fontSize: '18px' }}
              onClick={() => {
                setIsBarStats(false);
                setIsDoughnutType(false);
                setIsBarWeightHeight(true);
                setIsBarTotal(false);
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
                setIsBarWeightHeight(false);
                setIsBarTotal(true);
              }}
            >종합 능력치 통계</Button>
          </ListItem>
        </List>
      </Drawer>
    )

}

export default DrawerComponents;