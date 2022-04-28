import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import { useNavigate } from 'react-router-dom';
// import '../../BreadPage.css';

function GridCards({ bread, breadImg, drawPokemon }) {
	const navigate = useNavigate();
	const handleClick = () => {
		alert(drawPokemon.name);
		navigate(`/pokemonDetail/${drawPokemon.id}`);
	};

	const breadImgSrc = `https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/front/bread/${breadImg}.png`;

	if (bread) {
		return (
			<Grid item xs={3}>
				<Box
					className='bread'
					sx={{ position: 'relative' }}
					onClick={handleClick}
				>
					<Button
						className='btn'
						sx={{
							display: 'none',
							position: 'absolute',
							top: '40%',
							left: '31%',
						}}
					>
						빵 구매
					</Button>
					<Card>
						<CardMedia
							sx={{
								width: '100%',
								height: '100%',
								'&:hover': { '& .btn': { display: 'block' } },
							}}
							component='img'
							image={breadImgSrc}
							alt={breadImg}
						/>
					</Card>
				</Box>
			</Grid>
		);
	}
}

export default GridCards;
