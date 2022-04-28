import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GridCards from './components/BreadGridCard/BreadGridCards';

import * as Api from '../../api';

function BreadPage() {
	const [drawPokemon, setDrawPokemon] = useState();
	const breadImgs = [
		'digda',
		'ggobugi',
		'gouos',
		'pairi',
		'pikachu',
		'purin',
		'rocketdan',
	];

	useEffect(() => {
		const fetchDrawPokemon = async () => {
			const response = await Api.get('drawPokemon');
			setDrawPokemon(response.data);
		};
		fetchDrawPokemon();
	}, []);

	return (
		<Container fixed sx={{ marginTop: '135px' }}>
			<Typography
				component='h6'
				variant='h6'
				sx={{
					fontWeight: 'bold',
					display: 'flex',
					justifyContent: 'flex-end',
					marginTop: '10px',
				}}
			>
				남은 포인트: 1000
			</Typography>
			<Grid container spacing={4}>
				{breadImgs.map((breadImg) => (
					<React.Fragment key={breadImg}>
						<GridCards bread breadImg={breadImg} drawPokemon={drawPokemon} />
					</React.Fragment>
				))}
			</Grid>
		</Container>
	);
}

export default BreadPage;
