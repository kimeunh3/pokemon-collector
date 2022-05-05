import React from 'react';
import {
	Container,
	Box,
	Card,
	Grid,
	CardMedia,
	Typography,
	Button,
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
						<Button
							variant='contained'
							color='success'
							size='large'
							sx={{ display: 'flex', margin: 'auto', marginTop: '30px' }}
						>
							로그인
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default InfoSection;
