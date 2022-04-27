import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toolbar, IconButton, styled, Button, Grid } from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';
import {
	DialogActions,
	DialogContent,
	Dialog,
	DialogTitle,
} from '@mui/material';
import './LandingPage.css';
import { UserStateContext, DispatchContext } from '../../Context';
import DrawerComponents from '../../components/commons/DrawerComponents';

function LandingPage() {
	const navigate = useNavigate();
	const userState = useContext(UserStateContext);
	const dispatch = useContext(DispatchContext);

	// 전역상태에서 user가 null이 아니라면 로그인 성공 상태임.
	const isLogin = !!userState.user;

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

	// 로그아웃 클릭 시 실행되는 함수
	const logout = () => {
		// sessionStorage 에 저장했던 JWT 토큰을 삭제함.
		sessionStorage.removeItem('userToken');
		// dispatch 함수를 이용해 로그아웃함.
		dispatch({ type: 'LOGOUT' });
		// 기본 페이지로 돌아감.
		navigate('/home');
	};

	const [openDialog, setOpenDialog] = useState(false);

	const handleDialogOpen = () => {
		setOpenDialog(true);
	};
	const handleDialogClose = () => {
		setOpenDialog(false);
	};

	return (
		<div>
			<AppBar
				id='Header'
				position='static'
				open={open}
				style={{
					backgroundColor: '#D72A1F',
					boxShadow: '0 60px black, inset 0px 3px 4px 30px rgba(0, 0, 0, 0.05)',
					height: '450px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Toolbar style={{ width: '100vw' }}>
					{isLogin ? (
						<Grid
							container
							id='menu'
							style={{ marginBottom: '80px', textAlign: 'center' }}
						>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/bread')}
									style={{ fontSize: '2vw' }}
								>
									포켓몬빵
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/login')}
									style={{ fontSize: '2vw' }}
								>
									퀴즈
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/IllustratedBook')}
									style={{ fontSize: '2vw' }}
								>
									도감
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/StatisticsPage')}
									style={{ fontSize: '2vw' }}
								>
									통계
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={() => navigate('/MyPage')}
									style={{ fontSize: '2vw' }}
								>
									마이페이지
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='primary'
									onClick={logout}
									style={{ fontSize: '2vw' }}
								>
									로그아웃
								</Button>
							</Grid>
						</Grid>
					) : (
						<Grid
							container
							id='menu'
							style={{ marginBottom: '80px', textAlign: 'center' }}
						>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '2vw' }}
								>
									포켓몬빵
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '2vw' }}
								>
									퀴즈
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '2vw' }}
								>
									도감
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '2vw' }}
								>
									통계
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='inherit'
									onClick={handleDialogOpen}
									style={{ fontSize: '2vw' }}
								>
									마이페이지
								</Button>
							</Grid>
							<Grid item xs={2}>
								<Button
									color='primary'
									onClick={() => navigate('/login')}
									style={{ fontSize: '2vw' }}
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
				<img
					alt=''
					src='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/logo.png'
					width='600px'
					height='210px'
				/>
			</AppBar>
			<div
				style={{
					position: 'absolute',
					top: '380px',
					width: '100%',
					zIndex: '9999',
				}}
			>
				<div
					style={{ left: '50%', marginLeft: '-100px', position: 'absolute' }}
				>
					<img
						alt=''
						src='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/nav-icon.png'
						width='200px'
						height='200px'
					/>
				</div>
			</div>
			<DrawerComponents
				open={open}
				setOpen={setOpen}
				isLogin={isLogin}
				handleDialogOpen={handleDialogOpen}
				logout={logout}
			/>
			<button
				type='button'
				id='go-top'
				onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
			>
				<span className='material-symbols-outlined'>arrow_upward</span>
			</button>
			<div
				style={{
					position: 'relative',
					top: '200px',
					left: '10%',
				}}
			>
				<img
					alt=''
					src='https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/poster.png'
					style={{ height: '500px' }}
				/>
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

export default LandingPage;
