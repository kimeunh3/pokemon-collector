import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import CardContent from '@mui/material/CardContent';

function pokemonCard({ pokemon }) {
	const {
		id,
		name,
		typeOne,
		height,
		weight,
		totalPoints,
		hp,
		attack,
		defense,
	} = pokemon;

	const imgSrc = `https://pokemon-collector.s3.ap-northeast-2.amazonaws.com/pokemons/${id}.png`;

	return (
		<Container fixed sx={{ marginTop: '165px' }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid item xs={6} md={6}>
						<Card sx={{ maxWidth: 280, minHeight: 400, marginLeft: 9 }}>
							<CardHeader
								avatar={<Avatar aria-label='number'>{id}</Avatar>}
								action={<IconButton aria-label='settings' />}
								title={name}
								subheader={
									<>
										<OfflineBoltIcon color='warning' /> <span>{typeOne}</span>
									</>
								}
							/>
							<Box sx={{ width: '90%' }}>
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
										키 <br /> {height}
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
										<br /> {weight}
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
