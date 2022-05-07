import React from 'react';
import {
	Card,
	Grid,
	CardContent,
	CardMedia,
	Typography,
	Container,
	Box,
} from '@mui/material';

import { homeURL } from '../../../../../core/constants/ImgSrc';

function PurposeSection() {
	return (
		<Container sx={{ marginTop: 20 }}>
			<Grid container spacing={3}>
				<Grid
					item
					xs={12}
					md={12}
					sx={{ display: 'flex', justifyContent: 'center' }}
				>
					<Typography variant='h5' color='primary'>
						식지 않는 포켓몬 빵 열풍
					</Typography>
				</Grid>
				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image={`${homeURL}purpose1.jpg`}
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
							image={`${homeURL}purpose2.png`}
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
							image={`${homeURL}purpose3.jpg`}
						/>
						<CardContent sx={{ backgroundColor: '#FFFFFF' }}>
							<Typography variant='body1'>
								포켓몬빵 40일만에 1000만개 팔렸다… <br />- 이데일리
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={12} sx={{ marginTop: '50px' }}>
					<Typography variant='h5' color='error' sx={{ textAlign: 'center' }}>
						부작용으로 발생하는 사회 문제들
					</Typography>
				</Grid>
				<Grid item xs={4} md={4}>
					<Card>
						<CardMedia
							sx={{ height: '180px' }}
							component='img'
							image={`${homeURL}purpose4.jpg`}
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
							image={`${homeURL}purpose5.jpg`}
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
							image={`${homeURL}purpose6.png`}
						/>
						<CardContent sx={{ backgroundColor: '#EEF2FF' }}>
							<Typography variant='body1'>
								포켓몬빵 유행이 불러온 새로운 사기범죄 <br />- jtbc
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Box mt={23} sx={{ marginBottom: '50px' }}>
				<Grid container spacing={5}>
					<Grid item xs={3} md={3}>
						<CardMedia component='img' image={`${homeURL}purpose7.png`} />
						<Typography variant='h5'>
							포켓몬 빵을 구매하지 못한 소비자들에게
						</Typography>
					</Grid>
					<Grid item xs={1.5} md={1.5} sx={{ margin: 'auto' }}>
						<CardMedia component='img' image={`${homeURL}arrow.png`} />
					</Grid>
					<Grid item xs={3} md={3}>
						<CardMedia component='img' image={`${homeURL}pokemonCollector.png`} />
						<Typography variant='h5'>
							대리만족과 재밌는 <br />
							서비스를 제공
						</Typography>
					</Grid>
					<Grid item xs={1.5} md={1.5} sx={{ margin: 'auto' }}>
						<CardMedia component='img' image={`${homeURL}arrow.png`} />
					</Grid>
					<Grid item xs={3} md={3}>
						<CardMedia component='img' image={`${homeURL}purpose8.png`} />
						<Typography variant='h5'>
							<br />
							개인의 욕구 해소와 더 나아가 사회 문제 완화까지
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}

export default PurposeSection;
