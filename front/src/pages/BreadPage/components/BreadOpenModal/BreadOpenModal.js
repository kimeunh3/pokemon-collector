import React from 'react';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

import { useNavigate } from 'react-router-dom';

function BreadOpenModal({ isModalOpen, setIsModalOpen, drawnPokemon }) {
	const navigate = useNavigate();

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 700,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		borderRadius: '20px',
		boxShadow: 24,
		p: 4,
	};

	return (
		<Modal
			open={isModalOpen}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<CardMedia component='img' image='/getPokemon3.gif' alt='getPokemon' />
				<Box m={2} sx={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						variant='contained'
						onClick={() => {
							setIsModalOpen(false);
							navigate(`/pokemonDetail/${drawnPokemon.id}`);
						}}
					>
						뽑은 스티커 확인하러 가기!
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}

export default BreadOpenModal;
