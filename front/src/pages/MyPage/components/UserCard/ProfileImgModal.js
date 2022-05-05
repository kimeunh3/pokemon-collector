import React from 'react';
import { Modal, Button, Typography, Box, Grid } from '@mui/material';
import ProfileCard from './ProfileCard';

function ProfileImgModal({
	isEditProfileImg,
	setIsEditProfileImg,
	userPokemonList,
	selected,
	setSelected,
	inputs,
	setInputs,
}) {
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 600,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		borderRadius: '20px',
		boxShadow: 24,
		p: 4,
	};

	return (
		<Modal
			open={isEditProfileImg}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					보유 스티커 목록
				</Typography>
				<Grid container sx={{ height: 300, overflowY: 'scroll' }}>
					{userPokemonList &&
						userPokemonList.map((pokemon) => (
							<Grid item xs={3} md={3} key={pokemon.id}>
								<ProfileCard
									id={pokemon.id}
									name={pokemon.name}
									selected={selected}
									setSelected={setSelected}
									setIsEditProfileImg={setIsEditProfileImg}
									inputs={inputs}
									setInputs={setInputs}
								/>
							</Grid>
						))}
				</Grid>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}
					m={1}
				>
					<Button
						variant='contained'
						color='inherit'
						onClick={() => {
							setIsEditProfileImg(false);
						}}
					>
						취소
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}

export default ProfileImgModal;
