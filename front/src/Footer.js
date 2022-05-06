import React from 'react';
import { Divider, Typography, Container } from '@mui/material';

function Footer() {
	return (
		<Container sx={{ marginBottom: '20px' }}>
			<Divider variant='fillWidth' sx={{ border: '1px solid', margin: '25px' }} />
			<Typography sx={{ display: 'flex', justifyContent: 'center' }}>
				엘리스 AI 트랙 4기 2차 데이터 분석 프로젝트 (2022.04.19 ~ 2022.05.07)
			</Typography>
			<Typography sx={{ display: 'flex', justifyContent: 'center' }}>
				Developed by 구구절절 (김보현, 김은혜, 박보근, 신가현, 장소영)
			</Typography>
		</Container>
	);
}

export default Footer;
