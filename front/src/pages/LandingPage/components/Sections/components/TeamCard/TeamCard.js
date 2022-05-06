import React from 'react';
import {
	Card,
	Box,
	Grid,
	CardHeader,
	CardMedia,
	Avatar,
	CardContent,
	Typography,
	IconButton,
	Link,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import IconObj from '../../../../../../core/Icon';

function TeamCard({ v }) {
	const { name, gitHubURL, Img, favAtt, description } = v;

	return (
		<Card sx={{ maxWidth: 305 }}>
			<Grid container>
				<Grid item md={9}>
					<CardHeader
						avatar={
							<Avatar
								sx={{
									bgcolor: 'transparent',
									border: `3px solid ${IconObj[favAtt].Color.color}`,
								}}
							>
								{IconObj[favAtt].Icon}
							</Avatar>
						}
						title={<Typography variant='h7'>{name}</Typography>}
						sx={{ paddingBottom: '0' }}
					/>
				</Grid>
				<Grid item md={3}>
					<IconButton sx={{ marginBottom: -2 }}>
						<Link href={gitHubURL} target='_blank'>
							<GitHubIcon sx={{ color: IconObj[favAtt].Color.color }} />
							<Typography variant='body2' sx={{ color: IconObj[favAtt].Color.color }}>
								GitHub
							</Typography>
						</Link>
					</IconButton>
				</Grid>
			</Grid>
			<Box
				sx={{
					width: '100%',
					margin: '0',
				}}
			>
				<hr />
			</Box>
			<CardMedia
				component='img'
				image={Img}
				alt='profileImg'
				sx={{ width: '65%', height: '65%', margin: 'auto' }}
			/>
			<CardContent>
				<Typography>{description}</Typography>
			</CardContent>
		</Card>
	);
}

export default TeamCard;
