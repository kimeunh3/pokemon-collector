import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CatchingPokemon } from '@mui/icons-material';
import GridCards from './components/BreadGridCard/BreadGridCards';
import RankingButton from '../../components/commons/RankingButton';

import * as Api from '../../api';

function BreadPage() {
	const [point, setPoint] = useState();

	useEffect(() => {
		const fetchUserInfo = async () => {
			const res = await Api.get('user/current');
			setPoint(res.data.point);
		};
		fetchUserInfo();
	}, []);

	const breadImgs = [
		'digda',
		'ggobugi',
		'gouos',
		'pairi',
		'pikachu',
		'purin',
		'rocketdan',
	];

	return (
		<Container fixed sx={{ marginTop: '25vh' }}>
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
				남은 포인트: {point} &nbsp; <CatchingPokemon />
			</Typography>
			<Grid container spacing={4}>
				{breadImgs.map((breadImg) => (
					<React.Fragment key={breadImg}>
						<GridCards bread breadImg={breadImg} setPoint={setPoint} />
					</React.Fragment>
				))}
			</Grid>
			<RankingButton />
		</Container>
	);
}

export default BreadPage;
