import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

import ImgSrc from '../../../../core/constants/ImgSrc';

function BreadOpenModal({ isModalOpen, setIsModalOpen, drawnPokemon }) {
	const [buttonUp, setButtonUp] = useState(false);

	setTimeout(() => {
		setButtonUp(true);
	}, 3000);

	const navigate = useNavigate();

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 500,
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
				<CardMedia component='img' image={ImgSrc.getPokemon} alt='getPokemon' />
				<Box
					visibility={buttonUp || 'hidden'}
					sx={
						buttonUp
							? {
									transform: 'translate(28%,-460%)',
									transition: '600ms all ease-in-out',
							  }
							: { transform: 'translate(28%,0%)' }
					}
				>
					<Button
						variant='contained'
						color='success'
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
