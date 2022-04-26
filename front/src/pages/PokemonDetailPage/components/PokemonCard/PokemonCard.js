import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';

import {
	Adjust,
	LocalFireDepartment,
	Opacity,
	Grass,
	Bolt,
	BugReport,
	AcUnit,
	SportsMma,
	Coronavirus,
	Landscape,
	Air,
	Storm,
	Castle,
	DarkMode,
	Adb,
	Hardware,
	Reddit,
} from '@mui/icons-material';

function pokemonCard({ pokemon }) {
	const {
		id,
		name,
		typeOne,
		typeTwo,
		height,
		weight,
		totalPoints,
		hp,
		attack,
		defense,
	} = pokemon;

	const imgSrc = `https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/${id}.png`;

	const IconObj = {
		노말: <Adjust />,
		불꽃: <LocalFireDepartment />,
		물: <Opacity />,
		풀: <Grass />,
		전기: <Bolt />,
		얼음: <AcUnit />,
		격투: <SportsMma />,
		독: <Coronavirus />,
		땅: <Landscape />,
		비행: <Air />,
		에스퍼: <Storm />,
		벌레: <BugReport />,
		바위: <Castle />,
		고스트: <DarkMode />,
		드래곤: <Adb />,
		강철: <Hardware />,
		페어리: <Reddit />,
	};

	const typeOneIcon = IconObj[typeOne];
	const typeTwoIcon = typeTwo ? IconObj[typeTwo] : '';

	return (
		<Container fixed sx={{ marginTop: '165px' }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid item xs={6} md={6}>
						<Card sx={{ maxWidth: 280, minHeight: 400, marginLeft: 9 }}>
							<CardHeader
								avatar={<Avatar aria-label='number'>{id}</Avatar>}
								title={name}
								subheader={
									<>
										{typeOneIcon}
										{typeOne} {typeTwo === '없음' ? '' : typeTwoIcon}{' '}
										{typeTwo === '없음' ? '' : typeTwo}
									</>
								}
								sx={{ paddingBottom: 0 }}
							/>
							<Box sx={{ width: '90%', margin: '0' }}>
								<hr />
							</Box>
							<CardMedia
								component='img'
								image={imgSrc}
								alt='pokemon'
								sx={{ width: '100%', height: '100%', padding: '20px' }}
							/>
							<CardContent>
								<Grid
									container
									sx={{
										fontSize: '15px',
										textAlign: 'center',
										height: '95px',
									}}
								>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										키 <br /> {height} m
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{
											border: '1px solid black',
											borderRadius: '5px',
										}}
									>
										몸무게
										<br /> {weight} kg
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										종합
										<br /> {totalPoints}
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										HP
										<br /> {hp}
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										공격력
										<br /> {attack}
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										방어력
										<br /> {defense}
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}

export default pokemonCard;
