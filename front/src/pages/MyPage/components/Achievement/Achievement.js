import React from 'react';
import {
	Grid,
	Box,
	Typography,
	ListItem,
	ListItemAvatar,
	Avatar,
	Divider,
	LinearProgress,
} from '@mui/material';
import IconObj from '../../../../core/Icon';

function Achievement({ userAchievement }) {
	const { id, name, status, description } = userAchievement;

	const isClear = status === 100;

	const obj = {
		1: '포켓볼',
		2: '스타트',
		3: '노말',
		4: '불꽃',
		5: '물',
		6: '풀',
		7: '전기',
		8: '얼음',
		9: '격투',
		10: '독',
		11: '땅',
		12: '비행',
		13: '에스퍼',
		14: '벌레',
		15: '바위',
		16: '고스트',
		17: '드래곤',
		18: '강철',
		19: '페어리',
		20: '전설',
		21: '환상',
	};

	return (
		<Box>
			<Divider variant='inset' component='li' />
			<ListItem sx={{ marginTop: '20px' }}>
				<ListItemAvatar>
					<Avatar
						sx={{
							bgcolor: 'transparent',
							border: `3px solid ${IconObj[obj[id]].Color.color}`,
						}}
						variant='square'
					>
						{IconObj[obj[id]].Icon}
					</Avatar>
				</ListItemAvatar>
				<Box sx={{ width: '100%', mr: 1 }}>
					<Grid container>
						<Grid item md={10}>
							<Typography mb={1}>{name}</Typography>
						</Grid>
						<Grid item md={2}>
							<Typography> {status} / 100% </Typography>
						</Grid>
					</Grid>
					<LinearProgress
						variant='determinate'
						value={status}
						sx={{
							width: '94%',
							height: 10,
							borderRadius: 5,
							color: `${IconObj['불꽃'].Color.color}`,
						}}
					/>
				</Box>
			</ListItem>
			<Typography
				variant='subtitle2'
				sx={{
					display: 'flex',
					justifyContent: 'flex-end',
					marginRight: '10px',
				}}
				visibility={isClear || 'hidden'}
			>
				{description}
			</Typography>
		</Box>
	);
}

export default Achievement;
