import React, { useState } from 'react';
import {
	Card,
	Avatar,
	CardActions,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	Box,
	Button,
	Grid,
} from '@mui/material';
import IconObj from '../../../../core/Icon';
import { pokemonURL } from '../../../../core/constants/ImgSrc';
import * as Api from '../../../../api';

import AttendanceFailModal from '../AttendanceModal/AttendanceFailModal';
import AttendanceSuccModal from '../AttendanceModal/AttendanceSuccModal';
import UserEditCard from './UserEditCard';

function UserCard({ userState, fetchUserInfo, userPokemonList }) {
	const [attdFailModalOpen, setAttdFailModalOpen] = useState(false);
	const [attdSuccModalOpen, setAttdSuccModalOpen] = useState(true);
	const [isEdit, setIsEdit] = useState(false);
	const { email, nickname, likeType, rankPoint, point, profileImg } = userState;

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
			{isEdit ? (
				<UserEditCard
					userState={userState}
					setIsEdit={setIsEdit}
					fetchUserInfo={fetchUserInfo}
					userPokemonList={userPokemonList}
				/>
			) : (
				<Box>
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
								title={<Typography variant='h6'>{email}</Typography>}
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
							<Button variant='contained' color='success' onClick={handleAttendance}>
								출석체크
							</Button>
						</Grid>
					</Grid>
					<Box
						sx={{
							width: '100%',
							margin: '0',
						}}
					>
						<hr />
					</Box>
					<CardMedia
						component='img'
						image={`${pokemonURL}/${profileImg}`}
						alt='profileImg'
						sx={{ width: '65%', height: '65%', margin: 'auto' }}
					/>
					<CardContent>
						<Typography variant='h5'>포켓몬 트레이너 {nickname}님</Typography>
						<Typography>포인트 {point}</Typography>
						<Typography>랭크 포인트 {rankPoint}</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<Button
							variant='contained'
							sx={{
								minWidth: '110px',
								margin: 'auto',
							}}
							onClick={() => {
								setIsEdit(true);
							}}
						>
							프로필 변경
						</Button>
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
				</Box>
			)}
		</Card>
	);
}

export default UserCard;
