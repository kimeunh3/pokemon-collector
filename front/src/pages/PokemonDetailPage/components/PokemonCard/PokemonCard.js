import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
		노말: {
			Icon: <Adjust />,
			Color: '#A8A878',
		},
		불꽃: {
			Icon: <LocalFireDepartment />,
			Color: '#F08030',
		},
		물: {
			Icon: <Opacity />,
			Color: '#6890F0',
		},
		풀: {
			Icon: <Grass />,
			Color: '#78C850',
		},
		전기: {
			Icon: <Bolt />,
			Color: '#F8D030',
		},
		얼음: {
			Icon: <AcUnit />,
			Color: '#98D8D8',
		},
		격투: {
			Icon: <SportsMma />,
			Color: '#C03028',
		},
		독: {
			Icon: <Coronavirus />,
			Color: '#A040A0',
		},
		땅: {
			Icon: <Landscape />,
			Color: '#E0C068',
		},
		비행: {
			Icon: <Air />,
			Color: '#A890F0',
		},
		에스퍼: {
			Icon: <Storm />,
			Color: '#F85888',
		},
		벌레: {
			Icon: <BugReport />,
			Color: '#A8B820',
		},
		바위: {
			Icon: <Castle />,
			Color: '#B8A038',
		},
		고스트: {
			Icon: <DarkMode />,
			Color: '#705898',
		},
		드래곤: {
			Icon: <Adb />,
			Color: '#7038F8',
		},
		강철: {
			Icon: <Hardware />,
			Color: '#B8B8D0',
		},
		페어리: {
			Icon: <Reddit />,
			Color: '#EE99AC',
		},
	};

	const iconOne = typeOne && IconObj[typeOne].Icon;
	const typeOneColor = typeOne && IconObj[typeOne].Color;

	return (
		<Container fixed sx={{ minWidth: 800 }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid item xs={6} md={6}>
						<Card sx={{ maxWidth: 300, minHeight: 400, marginLeft: 9 }}>
							<CardHeader
								avatar={
									<Avatar sx={{ bgcolor: typeOneColor }} aria-label='number'>
										<Typography fontWeight='bold'>{id}</Typography>
									</Avatar>
								}
								title={name}
								subheader={
									<Grid container spacing={-5}>
										<Grid item xs={6}>
											<Typography sx={{ color: typeOneColor }}>
												{iconOne}
												{typeOne}
											</Typography>
										</Grid>
										<Grid item xs={6}>
											{typeTwo === '없음' ||
											IconObj[typeTwo] === undefined ? null : (
												<Typography sx={{ color: IconObj[typeTwo].Color }}>
													{IconObj[typeTwo].Icon} {typeTwo}
												</Typography>
											)}
										</Grid>
									</Grid>
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
