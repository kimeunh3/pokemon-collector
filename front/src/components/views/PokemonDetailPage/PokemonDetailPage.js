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

function PokemonDetailPage() {
	return (
		<Container fixed sx={{ marginTop: '165px' }}>
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={0}>
					<Grid item xs={6} md={6}>
						<Card sx={{ maxWidth: 280, minHeight: 400, marginLeft: 9 }}>
							<CardHeader
								avatar={<Avatar aria-label='number'>025</Avatar>}
								action={<IconButton aria-label='settings' />}
								title='피카츄'
								subheader={
									<>
										<OfflineBoltIcon color='warning' /> <span>전기포켓몬</span>
									</>
								}
							/>
							<Box sx={{ width: '90%' }}>
								<hr />
							</Box>
							<CardMedia
								component='img'
								image='images/pokemon/25.png'
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
										키 <br /> 40 cm
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
										<br /> 6 kg
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										종합
										<br /> 320 pt
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										HP
										<br /> 35
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										공격력
										<br /> 35 pt
									</Grid>
									<Grid
										item
										xs={4}
										md={4}
										sx={{ border: '1px solid black', borderRadius: '5px' }}
									>
										방어력
										<br /> 40 pt
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={6} md={6}>
						<img
							src='/images/pokemon/25_stat.png'
							alt='stat'
							width='98%'
							height='98%'
						/>
					</Grid>
					<Grid item xs={6} md={6}>
						<img
							src='/images/pokemon/25_Total.png'
							alt='stat'
							width='100%'
							height='100%'
						/>
					</Grid>
					<Grid item xs={6} md={6}>
						<img
							src='/images/pokemon/25_AD.png'
							alt='stat'
							width='100%'
							height='100%'
						/>
					</Grid>
					<Grid item xs={6} md={6}>
						<img
							src='/images/pokemon/25_Body.png'
							alt='stat'
							width='100%'
							height='100%'
						/>
					</Grid>
					<Grid item xs={6} md={6}>
						<img
							src='/images/pokemon/25_S-AD.png'
							alt='stat'
							width='100%'
							height='100%'
						/>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
export default PokemonDetailPage;
