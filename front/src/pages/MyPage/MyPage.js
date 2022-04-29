import React from 'react';
import {
	Container,
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

function MyPage({ userState }) {
	const { email } = userState.user;
	console.log(userState);
	const profileImg = `https://d31z0g5vo6ghmg.cloudfront.net/pokemons/pokeball.png`;

	return (
		<Container sx={{ marginTop: '165px' }}>
			<Card sx={{ maxWidth: 345 }}>
				<CardHeader
					avatar={<Avatar aria-label='recipe'>R</Avatar>}
					action={<IconButton aria-label='settings' />}
					title={email}
					subheader={email}
				/>
				<CardMedia
					component='img'
					image={profileImg}
					alt='profileImg'
					sx={{ width: '65%', height: '65%', margin: 'auto' }}
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
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
		</Container>
	);
}

export default MyPage;
