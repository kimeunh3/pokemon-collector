import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GridCards from './GridCards';

function BreadPage() {
	const breadImgs = [
		'images/bread/digda.png',
		'images/bread/ggobugi.png',
		'images/bread/gouos.png',
		'images/bread/pairi.png',
		'images/bread/pikachu.png',
		'images/bread/purin.png',
		'images/bread/rocketdan.png',
	];
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
						<GridCards bread breadImg={breadImg} />
					</React.Fragment>
				))}
			</Grid>
		</Container>
	);
}

export default BreadPage;
