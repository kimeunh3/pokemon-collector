import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';

function ProfileCard({ id, name }) {
	const imgSrc = `https://d31z0g5vo6ghmg.cloudfront.net/pokemons/${id}.png`;
	return (
		<Box>
			<Card
				sx={{
					width: '120px',
					cursor: 'pointer',
				}}
			/>
			<CardMedia style={{ textAlign: 'center' }}>
				<img
					alt=''
					src={imgSrc}
					style={{ marginTop: '1rem', width: '100px' }}
				/>
			</CardMedia>
			<Typography sx={{ textAlign: 'center' }}>{name}</Typography>
		</Box>
	);
}

export default ProfileCard;
