import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import * as Api from '../../../../api';

import BreadOpenModal from '../BreadOpenModal/BreadOpenModal';

function GridCards({ bread, breadImg }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [drawnPokemon, setDrawnPokemon] = useState(null);

	const handleClick = async () => {
		const response = await Api.get('drawPokemon');

		if (response.data) {
			setIsModalOpen(true);
			setDrawnPokemon(response.data);
		} else {
			alert(response);
		}
	};

	const breadImgSrc = `${process.env.REACT_APP_CLOUDFRONT_URL}front/bread/${breadImg}.png`;

	if (bread) {
		return (
			<Grid
				item
				xs={3}
				sx={{
					'&: hover': {
						'& .btn': {
							display: 'block',
						},
						'& .bread': {
							opacity: '0.7',
							transition: 'all 0.5s ease',
						},
					},
				}}
			>
				<Box
					className='bread'
					sx={{ position: 'relative', width: '100%', height: '100%' }}
				>
					<Card
						sx={{
							backgroundColor: 'transparent',
							boxShadow: 'none',
						}}
					>
						<CardMedia sx={{}} component='img' image={breadImgSrc} alt={breadImg} />
					</Card>
					<Button
						className='btn'
						variant='contained'
						color='success'
						onClick={handleClick}
						sx={{
							display: 'none',
							position: 'absolute',
							top: '40%',
							right: '33%',
						}}
					>
						<Typography>빵 구매</Typography>
					</Button>
				</Box>
				{isModalOpen && (
					<BreadOpenModal
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
						drawnPokemon={drawnPokemon}
					/>
				)}
			</Grid>
		);
	}
}

export default GridCards;
