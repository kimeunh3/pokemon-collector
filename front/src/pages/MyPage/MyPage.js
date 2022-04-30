import React, { useState, useEffect } from 'react';
import {
	Container,
	Grid,
	Box,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Divider,
	LinearProgress,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import UserCard from './components/UserCard/UserCard';
import MyStickerList from './components/MyStickerList/MyStickerList';

import * as Api from '../../api';
import IconObj from '../../core/Icon';

function MyPage() {
	const [userState, setUserState] = useState(null);
	const [userPokemonList, setUserPokemonList] = useState(null);

	const fetchUserInfo = async () => {
		const res = await Api.get('user/current');
		await setUserState(res.data);
		await setUserPokemonList(res.data.stickers);
	};

	useEffect(() => {
		fetchUserInfo();
	}, []);

	return (
		<Container fixed sx={{ marginTop: '165px', width: '100%' }}>
			<Grid container spacing={2}>
				<Grid item xs={4.5} md={4.5}>
					{userState && (
						<UserCard userState={userState} fetchUserInfo={fetchUserInfo} />
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
								maxWidth: 500,
								bgcolor: 'background.paper',
							}}
						>
							<ListItem>
								<ListItemAvatar>
									<Avatar sx={{ bgcolor: IconObj['불꽃'].Color.color }}>
										<EmojiEventsIcon />
									</Avatar>
								</ListItemAvatar>
								<Box sx={{ width: '100%', mr: 1 }}>
									<Grid container>
										<Grid item md={9}>
											<Typography mb={1}>불 포켓몬 콜렉터</Typography>{' '}
										</Grid>
										<Grid item md={3}>
											<Typography> 3 / 10</Typography>
										</Grid>
									</Grid>
									<LinearProgress
										variant='determinate'
										value={30}
										sx={{
											height: 10,
											borderRadius: 5,
											color: `${IconObj['불꽃'].Color.color}`,
										}}
									/>
								</Box>
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem mt={5}>
								<ListItemAvatar>
									<Avatar sx={{ bgcolor: IconObj['페어리'].Color.color }}>
										<EmojiEventsIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='Work' secondary='Jan 7, 2014' />
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemAvatar>
									<Avatar>
										<EmojiEventsIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText primary='Vacation' secondary='July 20, 2014' />
							</ListItem>
						</List>
					</Box>
				</Grid>
				<Grid item xs={12} sx={{ marginTop: '30px' }}>
					<Typography variant='h4'>보유한 스티커</Typography>
					<hr />
				</Grid>
				{userPokemonList &&
					userPokemonList.map((pokemon) => (
						<Grid item xs={2} md={2}>
							<MyStickerList
								id={pokemon.id}
								name={pokemon.name}
								count={pokemon.count}
							/>
						</Grid>
					))}
			</Grid>
		</Container>
	);
}

export default MyPage;
