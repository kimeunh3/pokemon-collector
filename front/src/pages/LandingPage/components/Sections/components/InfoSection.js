import React from 'react';
import { Box, Card, Grid, CardMedia, Typography } from '@mui/material';

import ImgSrc, { homeURL } from '../../../../../core/constants/ImgSrc';

function InfoSection() {
	return (
		<Box
			sx={{
				width: '100%',
				padding: '3%',
				backgroundColor: '#FFFFFF',
			}}
		>
			<Box sx={{ marginTop: '10vh' }}>
				<Grid container spacing={3}>
					<Grid item xs={5} md={5}>
						<Card sx={{ width: 380, margin: 'auto' }}>
							<CardMedia component='img' image={ImgSrc.posterImg} />
						</Card>
					</Grid>
					<Grid item xs={6} md={6} sx={{ marginLeft: '20px' }}>
						<Box
							sx={{
								backgroundColor: '#EEF2FF',
								borderRadius: '10px',
								padding: '20px',
								display: 'flex',
								flexDirection: 'column',
							}}
						>
							<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
								포켓몬 스티커를 모아보세요!
							</Typography>
							<Typography variant='body1' sx={{ marginTop: '30px' }}>
								포인트로 빵을 구매하고 포켓몬 스티커를 모아보세요! <br />
								출석체크와 오박사의 퀴즈를 풀어 포인트를 얻어 빵을 구매할 수 있습니다.
							</Typography>
							<Box>
								<Grid
									container
									spacing={0.7}
									sx={{
										marginTop: '30px',
										marginBottom: '30px',
										display: 'flex',
										justifyContent: 'center',
									}}
								>
									<Grid item xs={3} md={3}>
										<CardMedia component='img' image={`${homeURL}attendance.png`} />
									</Grid>

									<Grid item xs={3} md={3} sx={{ marginLeft: '10px' }}>
										<CardMedia component='img' image={`${homeURL}quiz.png`} />
									</Grid>

									<Grid item xs={3} md={3} sx={{ marginLeft: '10px' }}>
										<CardMedia component='img' image={`${homeURL}pikachu.png`} />
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default InfoSection;
