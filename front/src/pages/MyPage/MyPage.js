import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, List, Box } from '@mui/material';
import UserCard from './components/UserCard/UserCard';
import MyStickerList from './components/MyStickerList/MyStickerList';
import Achievement from './components/Achievement/Achievement';
import ScrollUpButton from '../../components/commons/ScrollUpButton';
import RankingButton from '../../components/commons/RankingButton';

import * as Api from '../../api';

function MyPage() {
	const [userState, setUserState] = useState(null);
	const [userPokemonList, setUserPokemonList] = useState(null);
	const [userAchievements, setUserAchievements] = useState(null);

	const fetchUserInfo = async () => {
		const res = await Api.get('user/current');
		setUserState(res.data);
		setUserPokemonList(res.data.stickers);
	};

	const fetchAchievements = async () => {
		try {
			const res = await Api.get('userAchievementList');
			setUserAchievements(res.data);
		} catch (err) {
			console.err(err);
		}
	};

	useEffect(() => {
		fetchUserInfo();
		fetchAchievements();
	}, []);

	return (
		<Container fixed sx={{ marginTop: '25vh', width: '100%' }}>
			<Grid container spacing={2}>
				<Grid item xs={4.5} md={4.5}>
					{userState && (
						<UserCard
							userState={userState}
							fetchUserInfo={fetchUserInfo}
							userPokemonList={userPokemonList}
						/>
					)}
				</Grid>
				<Grid
					item
					xs={7.5}
					md={7.5}
					sx={{ backgroundColor: 'white', marginTop: '17px' }}
				>
					<Box>
						<Typography variant='h5'>업적</Typography>
						<List
							sx={{
								width: '100%',
								maxWidth: 700,
								bgcolor: 'background.paper',
								maxHeight: 370,
								overflowY: 'scroll',
							}}
						>
							{userAchievements &&
								userAchievements.map((userAchievement) => (
									<React.Fragment key={userAchievement.id}>
										<Achievement userAchievement={userAchievement} />
									</React.Fragment>
								))}
						</List>
					</Box>
				</Grid>
				<Grid item xs={12} sx={{ marginTop: '30px' }}>
					<Typography variant='h4'>보유한 스티커</Typography>
					<hr />
				</Grid>
				{userPokemonList &&
					userPokemonList.map((pokemon) => (
						<Grid item xs={2} md={2} key={pokemon.id}>
							<MyStickerList
								id={pokemon.id}
								name={pokemon.name}
								count={pokemon.count}
							/>
						</Grid>
					))}
			</Grid>
			<ScrollUpButton />
			<RankingButton />
		</Container>
	);
}

export default MyPage;
