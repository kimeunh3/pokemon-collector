import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
	Toolbar,
	IconButton,
	styled,
	Button,
	Grid,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import {
	DialogActions,
	DialogContent,
	Dialog,
	DialogTitle,
} from '@mui/material';
import './NavBar.css';
import { UserStateContext, DispatchContext } from '../../Context';
import DrawerComponents from '../../components/commons/DrawerComponents';

function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();

	const userState = useContext(UserStateContext);
	const dispatch = useContext(DispatchContext);

	// 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
	const isLogin = !!userState.user;

	// 로그아웃 클릭 시 실행되는 함수
	const logout = () => {
		// sessionStorage 에 저장했던 JWT 토큰을 삭제함.
		sessionStorage.removeItem('userToken');
		// dispatch 함수를 이용해 로그아웃함.
		dispatch({ type: 'LOGOUT' });
		// 기본 페이지로 돌아감.
		navigate('/home');
	};

	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			width: '100%',
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginRight: 0,
		}),
	}));

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const [openDialog, setOpenDialog] = useState(false);

	const handleDialogOpen = () => {
		setOpenDialog(true);
	};
	const handleDialogClose = () => {
		setOpenDialog(false);
	};

	// login page와 home에서는 NavBar가 뜨지 않도록 설정
	if (location.pathname === '/login' || location.pathname === '/home' || location.pathname.includes('/StatisticsPage/TypeStatisticsPage/'))
		return null;

	return (
		<div>
			<AppBar
				position='fixed'
				open={open}
				style={{ backgroundColor: '#D72A1F', boxShadow: '0 30px black' }}
			>
				<Toolbar>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'
						onClick={() => navigate('/home')}
						style={{ marginRight: '40%' }}
					>
						<img
							alt=''
							src='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/logo.png'
							width='200px'
							height='70px'
						/>
					</IconButton>
					{isLogin ? (
						<Grid
							container
							id='menu'
							style={{ textAlign: 'center', alignItems: 'center' }}
						>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/bread')}
									style={{ fontSize: '1.1vw' }}
								>
									포켓몬빵
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/login')}
									style={{ fontSize: '1.1vw' }}
								>
									퀴즈
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/IllustratedBook')}
									style={{ fontSize: '1.1vw' }}
								>
									도감
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/StatisticsPage')}
									style={{ fontSize: '1.1vw' }}
								>
									통계
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/login')}
									style={{ fontSize: '1.1vw' }}
								>
									마이페이지
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='primary'
									onClick={logout}
									style={{ fontSize: '1.1vw' }}
								>
									로그아웃
								</Button>
							</Grid>
						</Grid>
					) : (
						<Grid
							container
							id='menu'
							style={{ textAlign: 'center', alignItems: 'center' }}
						>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '1.1vw' }}
								>
									포켓몬빵
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '1.1vw' }}
								>
									퀴즈
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '1.1vw' }}
								>
									도감
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '1.1vw' }}
								>
									통계
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '1.1vw' }}
								>
									마이페이지
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='primary'
									onClick={() => navigate('/login')}
									style={{ fontSize: '1.1vw' }}
								>
									로그인
								</Button>
							</Grid>
						</Grid>
					)}
					<IconButton
						id='Hamburger'
						color='info'
						aria-label='open drawer'
						edge='end'
						onClick={handleDrawerOpen}
						sx={{ ...(open && { display: 'none' }) }}
						style={{
							marginRight: '5%',
							marginLeft: 'auto',
						}}
					>
						<span className='material-symbols-outlined'>menu</span>
					</IconButton>
				</Toolbar>
			</AppBar>
			<DrawerComponents open={open} setOpen={setOpen} isLogin={isLogin} handleDialogOpen={handleDialogOpen} logout={logout} />
			<div
				style={{
					position: 'fixed',
					top: '54px',
					width: '100%',
					zIndex: '9999',
				}}
			>
				<div style={{ left: '50%', marginLeft: '-55px', position: 'absolute' }}>
					<img
						alt=''
						src="https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/nav-icon.png"
						width='110px'
						height='110px'
					/>
				</div>
			</div>
			<Dialog
				open={openDialog}
				onClose={handleDialogClose}
				style={{ zIndex: '10000' }}
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

export default NavBar;
