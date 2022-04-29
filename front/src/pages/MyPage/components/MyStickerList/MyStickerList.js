import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

function MyStickerLists({ id, name }) {
	const imgSrc = `https://d31z0g5vo6ghmg.cloudfront.net/pokemons/${id}.png`;
	const navigate = useNavigate();
	return (
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
	);
}

export default MyStickerLists;
