import React from 'react';
import {
	Container,
	Box,
	Card,
	Grid,
	CardMedia,
	CardContent,
	Typography,
	Divider,
} from '@mui/material';

import ImgSrc from '../../../../../core/constants/ImgSrc';

function InfoSection() {
	return (
		<Container sx={{ width: '100%', height: '100%', padding: '3%' }}>
			<Grid container>
				<Grid item xs={6} md={6}>
					<Card sx={{ maxWidth: 300, margin: 'auto', marginTop: '40px' }}>
						<CardMedia component='img' image={ImgSrc.posterImg} />
					</Card>
				</Grid>
				<Grid
					item
					xs={6}
					md={6}
					sx={{
						marginTop: '40px',
					}}
				>
					<Box
						sx={{
							backgroundColor: '#EEF2FF',
							borderRadius: '10px',
							padding: '20px',
							position: 'relative',
							top: '20%',
						}}
					>
						<Typography variant='h3' sx={{ fontWeight: 'bold' }}>
							포켓몬 스티커를 <br />
							모아보세요!
						</Typography>
						<Typography variant='body1' sx={{ marginTop: '30px' }}>
							포인트로 빵을 구매하고 포켓몬 스티커를 모아보세요! <br />
							출석체크와 오박사의 퀴즈를 풀어 포인트를 얻을 수 있습니다.
						</Typography>
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid
					item
					xs={12}
					md={12}
					sx={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}
				>
					<Typography variant='h5'>서비스 취지 & 목적</Typography>
				</Grid>

				<Divider sx={{ width: '100%' }} />

				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image='purpose1.jpg'
						/>
						<CardContent>
							<Typography variant='body1'>
								마트 오픈시간 전 포켓몬 빵 구입 줄 선 시민들 - 중앙일보
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image='purpose2.png'
						/>
						<CardContent sx={{ backgroundColor: '#EEF2FF' }}>
							<Typography variant='body1'>
								MZ세대 몰려 품절대란, ‘포켓몬빵’ 검색량 분석 - 중앙일보
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image='purpose3.jpg'
						/>
						<CardContent sx={{ backgroundColor: '#FFFFFF' }}>
							<Typography variant='body1'>
								포켓몬빵 40일만에 1000만개 팔렸다… <br />- 이데일리
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image='purpose4.jpg'
						/>
						<CardContent sx={{ backgroundColor: '#EEF2FF' }}>
							<Typography variant='body1'>
								“포켓몬빵이 인질로 잡혔다”…끼워팔기 상술 비난 - 헤럴드경제
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image='purpose5.jpg'
						/>
						<CardContent sx={{ backgroundColor: '#FFFFFF' }}>
							<Typography variant='body1'>
								포켓몬 빵으로 유인…초등생 추행한 60대 구속 - SBS
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image='purpose6.png'
						/>
						<CardContent sx={{ backgroundColor: '#EEF2FF' }}>
							<Typography variant='body1'>
								포켓몬빵 유행이 불러온 새로운 사기범죄 <br />- jtbc
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default InfoSection;
