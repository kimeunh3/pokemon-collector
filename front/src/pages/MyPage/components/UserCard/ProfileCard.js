import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';

import { pokemonURL } from '../../../../core/constants/ImgSrc';

function ProfileCard({
	id,
	name,
	setSelected,
	setIsEditProfileImg,
	inputs,
	setInputs,
}) {
	return (
		<Box>
			<Card
				sx={{
					width: '120px',
					cursor: 'pointer',
				}}
			/>
			<CardMedia
				sx={{ textAlign: 'center', cursor: 'pointer' }}
				onClick={() => {
					setSelected(`${id}.png`);
					setInputs({ ...inputs, profileImg: `${id}.png` });
					setIsEditProfileImg(false);
				}}
			>
				<img
					alt=''
					src={`${pokemonURL}/${id}.png`}
					style={{ marginTop: '1rem', width: '100px' }}
				/>
			</CardMedia>
			<Typography sx={{ textAlign: 'center' }}>{name}</Typography>
		</Box>
	);
}

export default ProfileCard;
