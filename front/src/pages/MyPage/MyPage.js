import React, { useState, useEffect } from 'react';
import { Container, Grid, Box } from '@mui/material';

import UserCard from './components/UserCard/UserCard';

import * as Api from '../../api';

function MyPage() {
	const [userState, setUserState] = useState([]);

	useEffect(() => {
		const fetchUserInfo = async () => {
			const res = await Api.get('user/current');
			await setUserState(res.data);
		};
		fetchUserInfo();
	}, []);

	return (
		<Container sx={{ marginTop: '165px', width: '100%' }}>
			<Grid container>
				<Grid item xs={6} md={6}>
					<UserCard userState={userState} />
				</Grid>
				<Grid item xs={6} md={6} sx={{ backgroundColor: 'white' }}>
					<Box>업적</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default MyPage;
