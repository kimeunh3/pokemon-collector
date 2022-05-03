import React from 'react';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

function BreadOpenModal({ isModalOpen, setIsModalOpen }) {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 800,
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
				<CardMedia image='/getPokemon.gif' />
				<Button
					sx={{ marginLeft: 15, marginTop: 3 }}
					variant='contained'
					onClick={() => {
						setIsModalOpen(false);
					}}
				>
					확인
				</Button>
			</Box>
		</Modal>
	);
}

export default BreadOpenModal;
