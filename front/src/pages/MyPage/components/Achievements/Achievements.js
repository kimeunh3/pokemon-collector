import React from 'react';
import {
	Grid,
	Box,
	Typography,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	Divider,
	LinearProgress,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import IconObj from '../../../../core/Icon';

function Achievements() {
	return (
		<Box>
			<Typography variant='h5'>업적</Typography>
			<List
				sx={{
					width: '100%',
					maxWidth: 700,
					bgcolor: 'background.paper',
				}}
			>
				<ListItem>
					<ListItemAvatar>
						<Avatar sx={{ bgcolor: IconObj['불꽃'].Color.color }}>
							<EmojiEventsIcon />
						</Avatar>
					</ListItemAvatar>
					<Box sx={{ width: '100%', mr: 1 }}>
						<Grid container>
							<Grid item md={9}>
								<Typography mb={1}>불 포켓몬 콜렉터</Typography>{' '}
							</Grid>
							<Grid item md={3}>
								<Typography> 3 / 10</Typography>
							</Grid>
						</Grid>
						<LinearProgress
							variant='determinate'
							value={30}
							sx={{
								height: 10,
								borderRadius: 5,
								color: `${IconObj['불꽃'].Color.color}`,
							}}
						/>
					</Box>
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItem mt={5}>
					<ListItemAvatar>
						<Avatar sx={{ bgcolor: IconObj['페어리'].Color.color }}>
							<EmojiEventsIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='Work' secondary='Jan 7, 2014' />
				</ListItem>
				<Divider variant='inset' component='li' />
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<EmojiEventsIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary='Vacation' secondary='July 20, 2014' />
				</ListItem>
			</List>
		</Box>
	);
}

export default Achievements;
