import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

import UserCard from './components/UserCard/UserCard';
import MyStickerList from './components/MyStickerList/MyStickerList';

import * as Api from '../../api';

function MyPage() {
	const [userState, setUserState] = useState(null);
	const [userPokemonList, setUserPokemonList] = useState(null);

	useEffect(() => {
		const fetchUserInfo = async () => {
			const res = await Api.get('user/current');
			await setUserState(res.data);
			await setUserPokemonList(res.data.stickers);
		};
		fetchUserInfo();
	}, []);

	return (
		<Container fixed sx={{ marginTop: '165px', width: '100%' }}>
			<Grid container spacing={2}>
				<Grid item xs={6} md={6}>
					{userState && <UserCard userState={userState} />}
				</Grid>
				<Grid item xs={6} md={6} sx={{ backgroundColor: 'white' }}>
					<Box>업적</Box>
				</Grid>
				<Grid item xs={12} sx={{ marginTop: '30px' }}>
					<Typography variant='h4'>보유한 스티커</Typography>
					<hr />
				</Grid>
				{userPokemonList &&
					userPokemonList.map((pokemon) => (
						<Grid item xs={2} md={2}>
							<MyStickerList id={pokemon.id} name={pokemon.name} />
						</Grid>
					))}
			</Grid>
		</Container>
	);
}

export default MyPage;
