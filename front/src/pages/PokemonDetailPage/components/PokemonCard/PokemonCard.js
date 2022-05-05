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

import { pokemonURL } from '../../../../core/constants/ImgSrc';

function pokemonCard({
	pokemon,
	iconOne,
	typeOneColor,
	iconTwo,
	typeTwoColor,
}) {
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

	return (
		<Container fixed sx={{ minWidth: 800 }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid item xs={6} md={6}>
						<Card
							sx={{
								maxWidth: 300,
								minHeight: 400,
								marginLeft: 9,
								boxShadow: `inset 0px 0px 30px ${typeOneColor}`,
							}}
						>
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
											{typeTwo !== '없음' && (
												<Typography sx={{ color: typeTwoColor }}>
													{iconTwo} {typeTwo}
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
							{pokemon && (
								<CardMedia
									component='img'
									image={`${pokemonURL}/${id}.png`}
									alt='pokemon'
									sx={{ width: '100%', height: '100%', padding: '20px' }}
								/>
							)}

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
										키 <br />
										{height} m
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
										<br />
										{weight} kg
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										종합점수
										<br />
										{totalPoints}
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
										<br />
										{attack}
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
