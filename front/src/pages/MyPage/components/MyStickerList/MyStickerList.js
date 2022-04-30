import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function MyStickerLists({ id, name, count }) {
	const imgSrc = `https://d31z0g5vo6ghmg.cloudfront.net/pokemons/${id}.png`;
	const navigate = useNavigate();
	return (
		<Box>
			<Typography sx={{ display: 'flex', justifyContent: 'end' }}>
				x{count}
			</Typography>
			<Card
				sx={{
					width: '180px',
					cursor: 'pointer',
					display: 'flex',
					flexDirection: 'column',
				}}
				onClick={() => navigate(`/pokemonDetail/${id}`)}
			>
				<CardMedia style={{ textAlign: 'center' }}>
					<img
						alt=''
						src={imgSrc}
						style={{ marginTop: '1rem', width: '140px' }}
					/>
				</CardMedia>
				<CardContent>
					<Typography
						gutterBottom
						variant='h6'
						component='div'
						style={{ textAlign: 'center' }}
					>
						{id}.{name}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
}

export default MyStickerLists;
