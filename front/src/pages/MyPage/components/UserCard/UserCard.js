import React from 'react';
import {
	Card,
	Avatar,
	IconButton,
	CardActions,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
} from '@mui/material';
import { Favorite, Share } from '@mui/icons-material';
import IconObj from '../../../../core/Icon';

function UserCard({ userState }) {
	const { email, nickname, likeType, point } = userState;

	const profileImg = `https://d31z0g5vo6ghmg.cloudfront.net/pokemons/pokeball.png`;

	return (
		<Card sx={{ maxWidth: 345 }}>
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
			/>
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
				<IconButton aria-label='add to favorites'>
					<Favorite />
				</IconButton>
				<IconButton aria-label='share'>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	);
}

export default UserCard;
