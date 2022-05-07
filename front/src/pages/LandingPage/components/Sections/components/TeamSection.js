import React from 'react';
import { Box, Container, Grid } from '@mui/material';

import TeamCard from './TeamCard/TeamCard';

import { homeURL } from '../../../../../core/constants/ImgSrc';

function TeamSection() {
	const teamObj = [
		{
			name: 'BE: 김보현',
			gitHubURL: 'https://github.com/nhs04047',
			Img: `${homeURL}nhs04047.png`,
			favAtt: '풀',
			description: '반갑습니다! 트레이너 어렵지 않아요 :) 재밌게 즐겨주세요!',
		},
		{
			name: 'BE: 김은혜(팀장)',
			gitHubURL: 'https://github.com/kimeunh3',
			Img: `${homeURL}kimeunh3.png`,
			favAtt: '에스퍼',
			description:
				'많은 애정을 담아 만들었습니다! 꼭 모든 포켓몬을 다 모으시길 바랄게요!',
		},
		{
			name: 'BE: 장소영',
			gitHubURL: 'https://github.com/Ssoyoung-J',
			Img: `${homeURL}Ssoyoung-J.png`,
			favAtt: '전기',
			description: '저희의 귀여운 포켓몬 서비스를 재밌게 즐겨주세요!',
		},
		{
			name: 'FE: 박보근',
			gitHubURL: 'https://github.com/bgeun',
			Img: `${homeURL}bgeun.png`,
			favAtt: '드래곤',
			description: `재밌는 기능이 많으니 한 번씩 해보시고 꼭 전설 포켓몬 뽑아보세요! 저는 뽑았답니다 :)`,
		},
		{
			name: 'FE: 신가현',
			gitHubURL: 'https://github.com/gshin-a',
			Img: `${homeURL}gshin-a.png`,
			favAtt: '불꽃',
			description: '반갑습니다 재밌게 둘러보세요!',
		},
	];

	return (
		<Box sx={{ width: '100%', height: '100%', marginTop: '5%' }}>
			<Container sx={{ display: 'flex', justifyContent: 'center' }}>
				<Grid container spacing={3}>
					{teamObj &&
						teamObj.map((v) => (
							<Grid item key={v.name} xs={4} md={4} sx={{ margin: 'auto' }}>
								<React.Fragment key={v.name}>
									<TeamCard v={v} />
								</React.Fragment>
							</Grid>
						))}
				</Grid>
			</Container>
		</Box>
	);
}

export default TeamSection;
