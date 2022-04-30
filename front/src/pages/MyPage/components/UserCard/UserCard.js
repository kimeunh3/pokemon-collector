import React, { useState } from 'react';
import {
	Card,
	Avatar,
	IconButton,
	CardActions,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	Box,
	Button,
	Grid,
} from '@mui/material';
import { Favorite, Share } from '@mui/icons-material';
import IconObj from '../../../../core/Icon';
import * as Api from '../../../../api';

import AttendanceFailModal from '../AttendanceModal/AttendanceFailModal';
import AttendanceSuccModal from '../AttendanceModal/AttendanceSuccModal';

function UserCard({ userState, fetchUserInfo }) {
	const [attdFailModalOpen, setAttdFailModalOpen] = useState(false);
	const [attdSuccModalOpen, setAttdSuccModalOpen] = useState(true);

	const { email, nickname, likeType, point } = userState;

	const profileImg = `https://d31z0g5vo6ghmg.cloudfront.net/pokemons/pokeball.png`;

	const fetchIsPointGiven = async () => {
		const res = await Api.put('user/attendanceCheck');
		setAttdFailModalOpen(res.data.isPointGiven);
		setAttdSuccModalOpen(res.data.isPointGiven);
	};

	const handleAttendance = () => {
		fetchIsPointGiven();
	};

	return (
		<Card sx={{ maxWidth: 345 }}>
			<Grid container>
				<Grid item md={8}>
					<CardHeader
						avatar={
							<Avatar
								sx={{
									bgcolor: 'transparent',
									border: `3px solid ${IconObj[likeType].Color.color}`,
								}}
							>
								{IconObj[likeType].Icon}
							</Avatar>
						}
						action={<IconButton aria-label='settings' />}
						title={email}
						sx={{ paddingBottom: '0' }}
					/>
				</Grid>
				<Grid
					item
					md={4}
					sx={{
						paddingTop: '20px',
						paddingRight: '8px',
						paddingBottom: '2px',
					}}
				>
					<Button
						variant='contained'
						color='success'
						onClick={handleAttendance}
					>
						출석체크
					</Button>
				</Grid>
			</Grid>
			<Box sx={{ width: '90%', margin: '0' }}>
				<hr />
			</Box>
			<CardMedia
				component='img'
				image={profileImg}
				alt='profileImg'
				sx={{ width: '65%', height: '65%', margin: 'auto' }}
			/>
			<CardContent>
				<Typography variant='h5'>포켓몬 트레이너 {nickname}님</Typography>
				<Typography>포인트 {point}</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<Grid container>
					<Grid item xs={3} md={8}>
						<IconButton aria-label='add to favorites'>
							<Favorite />
						</IconButton>
						<IconButton aria-label='share'>
							<Share />
						</IconButton>
					</Grid>
					<Grid item xs={9} md={4}>
						<Button variant='contained' sx={{ minWidth: '110px' }}>
							프로필 변경
						</Button>
					</Grid>
				</Grid>
			</CardActions>
			{attdFailModalOpen && (
				<AttendanceFailModal
					AttdFailModalOpen={attdFailModalOpen}
					setAttdFailModalOpen={setAttdFailModalOpen}
				/>
			)}
			{attdSuccModalOpen || (
				<AttendanceSuccModal
					attdSuccModalOpen={attdSuccModalOpen}
					setAttdSuccModalOpen={setAttdSuccModalOpen}
					fetchUserInfo={fetchUserInfo}
				/>
			)}
		</Card>
	);
}

export default UserCard;
